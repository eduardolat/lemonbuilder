import { Box } from '@mui/material'
import { useStoreState } from 'easy-peasy'

const Canvas = () => {
  const ui = useStoreState(state => state.ui)

  return (
    <Box sx={{
      width: `${ui.editorCanvasWidth}px`,
      height: `${ui.editorCanvasHeight}px`
    }}
    >
      <div id='lemon-editor-canvas' />
    </Box>
  )
}

export default Canvas
