import express from 'express'
import system from './system/router.js'
import auth from './auth/router.js'
import users from './users/router.js'
import projects from './projects/router.js'

const router = express.Router()

router.use('/system', system)
router.use('/auth', auth)
router.use('/users', users)
router.use('/projects', projects)

// TODO: Add file upload endpoint
// TODO: Add file deletion endpoint
// TODO: Add file listing endpoint

export default router
