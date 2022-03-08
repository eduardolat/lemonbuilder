import PageModel from '../../../models/pageModel.js'

export default async function setWebhooks (req, res) {
  const page = await PageModel.findById(req.params.pageId)

  if (!page) {
    return res.status(404).json({
      message: 'Page not found'
    })
  }

  page.webhooks = req.body.webhooks

  try {
    await page.save()
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
  }

  res.json(page)
}
