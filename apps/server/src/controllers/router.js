import express from 'express'
import auth from './auth/router.js'

const router = express.Router()

router.use('/auth', auth)

export default router
