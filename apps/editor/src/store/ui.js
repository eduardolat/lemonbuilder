import { action, computed } from 'easy-peasy'

const firebaseAuth = {
  windowWidth: 0,
  windowHeight: 0,

  editorTopBarWidth: computed((state) => {
    return state.windowWidth
  }),
  editorTopBarHeight: 50,

  editorSidebarWidth: 250,
  editorSidebarHeight: computed((state) => {
    return state.windowHeight - state.editorTopBarHeight
  }),
  editorSidebarNavHeight: 50,
  editorSidebarContentHeight: computed((state) => {
    return state.editorSidebarHeight - state.editorSidebarNavHeight
  }),

  editorCanvasWidth: computed((state) => {
    return state.windowWidth - state.editorSidebarWidth
  }),
  editorCanvasHeight: computed((state) => {
    return state.windowHeight - state.editorTopBarHeight
  }),

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
