import express from 'express'
import { body } from 'express-validator'
import handleValidation from '../../middlewares/handleValidation.js'
import createInitialUser from './createInitialUser.action.js'
import setupStatus from './setupStatus.action.js'

const router = express.Router()

router.get('/setup-status', setupStatus)

router.post('/initial-user',
  body('name').notEmpty(),
  body('email').notEmpty().isEmail(),
  body('password').notEmpty().isLength({ min: 6 }),
  handleValidation,
  createInitialUser
)

export default router
