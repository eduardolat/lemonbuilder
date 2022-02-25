import { useLayoutEffect, useState } from 'react'
import { Box, IconButton, Tooltip } from '@mui/material'
import useLocalStorage from '@/hooks/useLocalStorage'
import BorderClearIcon from '@mui/icons-material/BorderClear'
import CodeIcon from '@mui/icons-material/Code'
import LayersClearIcon from '@mui/icons-material/LayersClear'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import UndoIcon from '@mui/icons-material/Undo'
import RedoIcon from '@mui/icons-material/Redo'

const RightControls = ({ editor }) => {
  // Handle show borders
  const [showBorders, setShowBorders] = useLocalStorage('showBorders', 'on')

  useLayoutEffect(() => {
    if (editor == null) return

    if (showBorders === 'on') {
      editor.Commands.run('sw-visibility')
    } else {
      editor.Commands.stop('sw-visibility')
    }
  }, [showBorders, editor])

  const handleToggleBorders = () => {
    if (showBorders === 'on') {
      setShowBorders('off')
    } else {
      setShowBorders('on')
    }
  }
  //

  // Handle preview
  const [previewMode, setPreviewMode] = useState(false)
  const handleTogglePreview = () => {
    if (previewMode) {
      editor.Commands.stop('core:preview')
      setPreviewMode(false)
    } else {
      editor.Commands.run('core:preview')
      setPreviewMode(true)
    }
  }
  //

  // Handle events
  const handleOpenExport = () => {
    editor.Commands.run('export-template')
  }

  const handleCanvasClear = () => {
    if (window.confirm('Are you sure you want to clear the canvas?')) {
      editor.Commands.run('core:canvas-clear')
    }
  }

  const handleFullScreen = () => {
    editor.Commands.run('core:fullscreen')
  }

  const handleUndo = () => {
    editor.Commands.run('core:undo')
  }

  const handleRedo = () => {
    editor.Commands.run('core:redo')
  }
  //

  return (
    <Box sx={{ display: 'inline' }}>
      {!previewMode && (
        <Tooltip title='Enter in preview mode' onClick={handleTogglePreview}>
          <IconButton color='primary'>
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
      )}
      {previewMode && (
        <Tooltip title='Exit from preview mode' onClick={handleTogglePreview}>
          <IconButton color='secondary'>
            <VisibilityOffIcon />
          </IconButton>
        </Tooltip>
      )}

      {showBorders === 'on' && (
        <Tooltip title='Hide gridlines' onClick={handleToggleBorders}>
          <IconButton color='secondary'>
            <BorderClearIcon />
          </IconButton>
        </Tooltip>
      )}
      {showBorders !== 'on' && (
        <Tooltip title='Show gridlines' onClick={handleToggleBorders}>
          <IconButton color='primary'>
            <BorderClearIcon />
          </IconButton>
        </Tooltip>
      )}

      <Tooltip title='Full Screen' onClick={handleFullScreen}>
        <IconButton color='primary'>
          <FullscreenIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='Undo' onClick={handleUndo}>
        <IconButton color='primary'>
          <UndoIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='Redo' onClick={handleRedo}>
        <IconButton color='primary'>
          <RedoIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='Show code' onClick={handleOpenExport}>
        <IconButton color='primary'>
          <CodeIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='Clear all' onClick={handleCanvasClear}>
        <IconButton color='warning'>
          <LayersClearIcon />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default RightControls
