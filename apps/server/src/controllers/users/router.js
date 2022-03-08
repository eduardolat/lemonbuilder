import express from 'express'
import { body } from 'express-validator'
import handleValidation from '../../middlewares/handleValidation.js'
import authenticated from '../../middlewares/authenticated.js'
import createInitialUser from './createInitialUser.action.js'
import getUsers from './getUsers.action.js'

const router = express.Router()

router.get(
  '/',
  authenticated('admin'),
  getUsers
)

router.post('/initial-user',
  body('name').notEmpty(),
  body('email').notEmpty().isEmail(),
  body('password').notEmpty().isLength({ min: 6 }),
  handleValidation,
  createInitialUser
)

// TODO: Add user creation endpoint
// TODO: Add user deletion endpoint
// TODO: Add user update endpoint
// TODO: Add user password update endpoint

export default router
