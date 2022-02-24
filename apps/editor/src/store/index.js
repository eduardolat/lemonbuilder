import { createStore } from 'easy-peasy'
import auth from './auth'
import ui from './ui'

const globalModel = {
  auth,
  ui
}

export const store = createStore(globalModel)
