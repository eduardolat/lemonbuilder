import express from 'express'
import _ from 'lodash'
import authenticated from '../../../middlewares/authenticated.js'
import { body, param } from 'express-validator'
import handleValidation from '../../../middlewares/handleValidation.js'
import isValidWebhook from '../../../helpers/isValidWebhook.js'
import getPages from './getPages.action.js'
import createPage from './createPage.action.js'
import getPage from './getPage.action.js'
import setWebhooks from './setWebhooks.action.js'

const router = express.Router({ mergeParams: true })

router.get(
  '/',
  authenticated(),
  getPages
)

router.post(
  '/',
  authenticated(),
  body('prettyId').notEmpty(),
  body('name').notEmpty(),
  body('description'),
  body('rawHtml').notEmpty(),
  body('rawCss').notEmpty(),
  body('jsonHtml').notEmpty(),
  body('jsonCss').notEmpty(),
  handleValidation,
  createPage
)

router.get(
  '/:pageId',
  param('pageId').isMongoId(),
  handleValidation,
  authenticated('admin'),
  getPage
)

router.post(
  '/:pageId/webhooks',
  param('pageId').isMongoId(),
  body('webhooks')
    .custom((item) => _.isArray(item))
    .withMessage('Invalid webhooks array')
    .custom((item) => item.every(isValidWebhook))
    .withMessage('Invalid webhooks'),
  handleValidation,
  authenticated('admin'),
  setWebhooks
)

// TODO: Add page update endpoint
// TODO: Add page deletion endpoint
// TODO: Add page webhooks execution endpoint
// TODO: Add page metadata update endpoint

export default router
