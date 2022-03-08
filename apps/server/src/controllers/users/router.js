import express from 'express'
import authenticated from '../../middlewares/authenticated.js'
import getUsers from './getUsers.action.js'

const router = express.Router()

router.get(
  '/',
  authenticated('admin'),
  getUsers
)

// TODO: Add user creation endpoint
// TODO: Add user deletion endpoint
// TODO: Add user update endpoint
// TODO: Add user password update endpoint

export default router
