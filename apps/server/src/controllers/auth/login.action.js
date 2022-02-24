import jwt from 'jsonwebtoken'

const loginAction = async (req, res) => {
  const { username, password } = req.body

  if (
    username !== process.env.SERVER_ACCESS_USERNAME ||
    password !== process.env.SERVER_ACCESS_PASSWORD
  ) {
    return res.status(401).json({
      error: 'Invalid username or password'
    })
  }

  const token = jwt.sign(
    { username },
    process.env.SERVER_JWT_SECRET,
    {
      algorithm: 'HS256',
      expiresIn: '9999 years'
    }
  )

  res.send({ payload: { username }, token })
}

export default loginAction
