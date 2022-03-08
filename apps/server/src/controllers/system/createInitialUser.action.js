import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dayjs from 'dayjs'
import UserModel from '../../models/userModel.js'

const createInitialUser = async (req, res) => {
  // Check if there is no user in the database
  const users = await UserModel.find().limit(1)
  if (users.length > 0) {
    return res.status(403).json({
      message: 'There is already a user in the database'
    })
  }
  //

  const { name, email, password } = req.body
  const hashedPassword = await bcrypt.hashSync(password, 10)

  const user = new UserModel({
    name,
    email,
    password: hashedPassword,
    role: 'admin'
  })

  await user.save()

  const jwtPayload = {
    _id: user._id,
    name,
    email,
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

  res.status(201).json({ payload: jwtPayload, token })
}

export default createInitialUser
