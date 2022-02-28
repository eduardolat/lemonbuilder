import ProjectModel from '../../models/projectModel.js'

export default async function createProject (req, res) {
  const project = new ProjectModel({
    name: req.body.name,
    description: req.body.description
  })

  await project.save()

  res.status(201).json(project)
}
