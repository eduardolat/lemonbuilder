import express from 'express'
import auth from './auth/router.js'
import users from './users/router.js'
import projects from './projects/router.js'

const router = express.Router()

router.use('/auth', auth)
router.use('/users', users)
router.use('/projects', projects)

export default router
