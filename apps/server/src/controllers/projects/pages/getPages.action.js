import PageModel from '../../../models/pageModel.js'

export default async function getPages (req, res) {
  const pages = await PageModel.find({ project: req.params.projectId }).sort({ createdAt: -1 })
  res.json(pages)
}
