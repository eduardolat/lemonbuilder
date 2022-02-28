import UserModel from '../../models/userModel.js'

export default async function getUsers (req, res) {
  const users = await UserModel.find().sort({ createdAt: -1 })
  res.json(users)
}
