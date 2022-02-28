import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

schema.pre('save', function (next) {
  this.updatedAt = Date.now()
  return next()
})

const UserModel = mongoose.model('User', schema)
export default UserModel
