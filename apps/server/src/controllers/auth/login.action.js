import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import UserModel from '../../models/userModel.js'
import dayjs from 'dayjs'

const loginAction = async (req, res) => {
  const { email, password } = req.body

  const user = await UserModel.findOne({ email })

  if (user == null) {
    return res.status(401).json({
      error: 'Invalid email or password'
    })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (isPasswordValid === false) {
    return res.status(401).json({
      error: 'Invalid email or password'
    })
  }

  const jwtPayload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: dayjs(user.createdAt).toISOString()
  }
  const token = jwt.sign(
    jwtPayload,
    process.env.SERVER_JWT_SECRET,
    {
      algorithm: 'HS256',
      expiresIn: '9999 years'
    }
  )

  res.send({ payload: jwtPayload, token })
}

export default loginAction
