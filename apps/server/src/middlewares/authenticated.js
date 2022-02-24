/**
 * Middleware to authentiate requests using JWT token
 */

import jwt from 'jsonwebtoken'

const authenticated = async (req, res, next) => {
  const bearerToken = req.headers.authorization

  if (bearerToken == null) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const token = bearerToken.replace('Bearer ', '').replace('bearer ', '')

  try {
    jwt.verify(
      token,
      process.env.SERVER_JWT_SECRET,
      {
        algorithms: ['HS256']
      }
    )
  } catch (err) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: err.message
    })
  }

  next()
}

export default authenticated
