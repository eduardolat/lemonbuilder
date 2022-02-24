import { action } from 'easy-peasy'

const firebaseAuth = {
  windowWidth: 0,
  windowHeight: 0,

  setWindowSize: action((state, payload) => {
    if (payload.windowWidth !== null) {
      state.windowWidth = payload.width
    }
    if (payload.windowWidth !== null) {
      state.windowHeight = payload.height
    }
  })
}

export default firebaseAuth
