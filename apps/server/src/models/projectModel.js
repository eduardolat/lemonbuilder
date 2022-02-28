import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: String,
  description: String,
  webhooks: [{
    method: {
      type: String,
      enum: ['GET', 'POST'],
      default: 'GET'
    },
    url: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },

  // Relationships
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
})

schema.pre('save', function (next) {
  this.updatedAt = Date.now()
  return next()
})

const ProjectModel = mongoose.model('Project', schema)
export default ProjectModel
