import { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'
import useWindowSize from './hooks/useWindowSize'
import AuthTrigger from './AuthTrigger'

// Router
import Router from './pages/router'
//

// Styles and mui theme
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@/styles/muiTheme'
import '@/styles/general.css'
//

// GrapesJS Style
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs-blocks-basic/dist/grapesjs-blocks-basic.min.js'
import '@/styles/editor.css'
//

// React-Toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
//

const App = () => {
  // State and actions from store
  const setWindowSize = useStoreActions(actions => actions.ui.setWindowSize)
  //

  // Store window size in the global state
  const windowSize = useWindowSize()
  useEffect(() => {
    setWindowSize({ width: windowSize.width, height: windowSize.height })
  }, [windowSize])
  //

  return (
    <>
      <AuthTrigger />
      <CssBaseline />
      <ThemeProvider>
        <Router />
      </ThemeProvider>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
