import express from 'express'
import { body } from 'express-validator'
import authenticated from '../../middlewares/authenticated.js'
import handleValidation from '../../middlewares/handleValidation.js'
import loginAction from './login.action.js'

const router = express.Router()

router.post(
  '/login',
  body('email').notEmpty(),
  body('password').notEmpty(),
  handleValidation,
  loginAction
)

router.get('/verify', authenticated, (req, res) => {
  res.json({ ok: true, authUser: req.authUser })
})

export default router
