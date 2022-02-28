/**
 * Middleware to authentiate requests using JWT token, can verify one role
 */

import jwt from 'jsonwebtoken'

const authenticated = (role) => async (req, res, next) => {
  const bearerToken = req.headers.authorization

  if (bearerToken == null) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const token = bearerToken.replace('Bearer ', '').replace('bearer ', '')

  try {
    const decoded = jwt.verify(
      token,
      process.env.SERVER_JWT_SECRET,
      {
        algorithms: ['HS256']
      }
    )
    req.authUser = decoded
  } catch (err) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: err.message
    })
  }

  if (role != null) {
    if (req.authUser.role !== role) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
  }

  next()
}

export default authenticated
