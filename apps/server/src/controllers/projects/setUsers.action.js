import ProjectModel from '../../models/projectModel.js'

export default async function setUsers (req, res) {
  const project = await ProjectModel.findById(req.params.projectId)

  if (!project) {
    return res.status(404).json({
      message: 'Project not found'
    })
  }

  project.users = req.body.users

  await project.save()

  res.json(project)
}
