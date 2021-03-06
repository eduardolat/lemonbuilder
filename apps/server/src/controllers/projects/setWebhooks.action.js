import ProjectModel from '../../models/projectModel.js'

export default async function setWebhooks (req, res) {
  const project = await ProjectModel.findById(req.params.projectId)

  if (!project) {
    return res.status(404).json({
      message: 'Project not found'
    })
  }

  project.webhooks = req.body.webhooks

  try {
    await project.save()
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
  }

  res.json(project)
}
