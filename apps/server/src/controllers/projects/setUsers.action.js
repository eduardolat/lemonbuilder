import ProjectModel from '../../models/projectModel.js'

export default async function setUsers (req, res) {
  const project = await ProjectModel.findById(req.params.projectId)

  if (!project) {
    return res.status(404).json({
      message: 'Project not found'
    })
  }

  project.users = req.body.users

  try {
    await project.save()
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
  }

  res.json(project)
}
