/* eslint-disable import/first */
import { fileURLToPath } from 'url'
import path from 'path'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '../../../.env') })

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import router from './controllers/router.js'

const bootstrap = async () => {
  // Connect to MongoDB
  await mongoose.connect(process.env.SERVER_MONGODB_URI)
  console.log('Connected to MongoDB')
  //

  const app = express()

  app.use(cors())
  app.use(helmet({ contentSecurityPolicy: false }))
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // Api router
  app.use('/api', router)
  //

  // React frontend
  app.use(express.static(path.join(__dirname, '../../editor/dist/')))
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../editor/dist/', 'index.html'))
  })
  //

  app.listen(7001, () => {
    console.log('Server listening on http://localhost:7001/')
  })
}

bootstrap().catch(err => console.log(err))
