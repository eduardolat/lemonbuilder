import mongoose from 'mongoose'

// TODO: Add page metadata

const schema = new mongoose.Schema({
  prettyId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  description: String,
  rawHtml: { type: String, required: true },
  rawCss: { type: String, required: true },
  jsonHtml: { type: String, required: true },
  jsonCss: { type: String, required: true },
  isolatedHtml: { type: String, required: true },
  isolatedCss: { type: String, required: true },
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
    ref: 'Project',
    required: true
  }
})

schema.pre('save', function (next) {
  this.updatedAt = Date.now()
  return next()
})

const ProjectModel = mongoose.model('Page', schema)
export default ProjectModel
