import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig(() => {
  require('dotenv').config({ path: path.join(__dirname, '../../.env') })

  return {
    resolve: {
      alias: [{ find: '@', replacement: path.join(__dirname, '/src') }]
    },
    plugins: [react()]
  }
})
