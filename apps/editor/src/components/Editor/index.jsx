import { useLayoutEffect, useState } from 'react'
import { Box } from '@mui/material'
import grapesjs from 'grapesjs'
import Canvas from './Canvas'
import { useStoreState } from 'easy-peasy'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export const Editor = () => {
  const ui = useStoreState(state => state.ui)
  const [editor, setEditor] = useState(null)

  useLayoutEffect(() => {
    setEditor(
      grapesjs.init({
        container: '#lemon-editor-canvas',
        height: '100%',
        width: '100%',
        // storageManager: false,
        panels: { defaults: [] },
        blockManager: { appendTo: '#lemon-editor-blocks' },
        plugins: ['gjs-blocks-basic']
      })
    )
  }, [])

  return (
    <Box>
      <Topbar editor={editor} />
      <Box
        sx={{
          width: ui.windowWidth,
          display: 'flex'
        }}
      >
        <Sidebar editor={editor} />
        <Canvas editor={editor} />
      </Box>
    </Box>
  )
}

export default Editor
