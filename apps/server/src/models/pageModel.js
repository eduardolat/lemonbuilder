import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  prettyId: String,
  name: String,
  description: String,
  rawHtml: String,
  rawCss: String,
  jsonHtml: String,
  jsonCss: String,
  isolatedHtml: String,
  isolatedCss: String,
  revisions: [{
    createdAt: {
      type: Date,
      default: Date.now
    },
    rawHtml: String,
    rawCss: String,
    jsonHtml: String,
    jsonCss: String,
    isolatedHtml: String,
    isolatedCss: String
  }],
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
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }
})

schema.pre('save', function (next) {
  this.updatedAt = Date.now()
  return next()
})

const ProjectModel = mongoose.model('Page', schema)
export default ProjectModel
