import sass from 'node-sass'
import ShortUniqueId from 'short-unique-id'
import { stringToSlug } from '@app/global'
import PageModel from '../../../models/pageModel.js'

const uid = new ShortUniqueId({ length: 5 })

export default async function createPage (req, res) {
  const {
    prettyId,
    name,
    description,
    rawHtml,
    rawCss,
    jsonHtml,
    jsonCss
  } = req.body

  const isolatedItemsId = `lemon-builder-${uid()}`

  const isolatedHtml = `<div id="${isolatedItemsId}">${rawHtml}</div>`

  const isolatedCss = sass.renderSync({
    data: `#${isolatedItemsId} { ${rawCss} }`
  }).css.toString()

  const page = new PageModel({
    prettyId: stringToSlug(prettyId),
    name,
    description,
    rawHtml,
    rawCss,
    jsonHtml,
    jsonCss,
    isolatedHtml,
    isolatedCss,
    project: req.params.projectId
  })

  try {
    await page.save()
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
  }

  res.status(201).json(page)
}
