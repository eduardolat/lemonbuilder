import PageModel from '../../../models/pageModel.js'

export default async function getPage (req, res) {
  const page = await PageModel.findById(req.params.pageId)

  if (!page) {
    return res.status(404).json({
      message: 'Page not found'
    })
  }

  res.json(page)
}
