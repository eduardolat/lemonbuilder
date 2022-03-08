import UserModel from '../../models/userModel.js'

export default async function setupStatus (req, res) {
  const users = await UserModel.find().limit(1)

  return res.status(200).json({
    setupFinished: users.length > 0
  })
}
