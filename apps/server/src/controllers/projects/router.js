import express from 'express'
import { body, param } from 'express-validator'
import mongoose from 'mongoose'
import _ from 'lodash'
import authenticated from '../../middlewares/authenticated.js'
import handleValidation from '../../middlewares/handleValidation.js'
import createProject from './createProject.action.js'
import getProjects from './getProjects.action.js'
import getProject from './getProject.action.js'
import isValidWebhook from '../../helpers/isValidWebhook.js'
import setUsers from './setUsers.action.js'
import setWebhooks from './setWebhooks.action.js'

const router = express.Router()

router.get(
  '/',
  authenticated(),
  getProjects
)

router.post(
  '/',
  body('name').notEmpty(),
  body('description'),
  handleValidation,
  authenticated('admin'),
  createProject
)

router.get(
  '/:projectId',
  param('projectId').isMongoId(),
  handleValidation,
  authenticated(),
  getProject
)

router.post(
  '/:projectId/users',
  param('projectId').isMongoId(),
  body('users')
    .custom((item) => _.isArray(item))
    .withMessage('Invalid users array')
    .custom((item) => item.every((user) => mongoose.isValidObjectId(user)))
    .withMessage("Invalid user id's"),
  handleValidation,
  authenticated('admin'),
  setUsers
)

router.post(
  '/:projectId/webhooks',
  param('projectId').isMongoId(),
  body('webhooks')
    .custom((item) => _.isArray(item))
    .withMessage('Invalid webhooks array')
    .custom((item) => item.every(isValidWebhook))
    .withMessage('Invalid webhooks'),
  handleValidation,
  authenticated('admin'),
  setWebhooks
)

export default router
