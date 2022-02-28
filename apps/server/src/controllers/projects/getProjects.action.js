import ProjectModel from '../../models/projectModel.js'

export default async function getProjects (req, res) {
  const projects = await ProjectModel.find().sort({ createdAt: -1 })
  res.json(projects)
}
