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
        panels: { defaults: [] },
        plugins: ['gjs-blocks-basic'],
        blockManager: { appendTo: '#lemon-editor-blocks' },
        layerManager: { appendTo: '#lemon-editor-layers' },
        styleManager: { appendTo: '#lemon-editor-styles' },
        traitManager: { appendTo: '#lemon-editor-traits' },
        deviceManager: {
          devices: [
            {
              name: 'Mobile',
              width: '320px',
              widthMedia: '480px'
            },
            {
              name: 'Tablet',
              width: '700px',
              widthMedia: '768px'
            },
            {
              name: 'Desktop'
            }
          ]
        }
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
