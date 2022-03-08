import ProjectModel from '../../models/projectModel.js'

export default async function createProject (req, res) {
  const project = new ProjectModel({
    name: req.body.name,
    description: req.body.description
  })

  try {
    await project.save()
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
  }

  res.status(201).json(project)
}
