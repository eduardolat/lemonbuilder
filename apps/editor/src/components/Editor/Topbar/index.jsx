import { useLayoutEffect } from 'react'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import { useStoreState } from 'easy-peasy'
import useLocalStorage from '@/hooks/useLocalStorage'
import BorderClearIcon from '@mui/icons-material/BorderClear'
import CodeIcon from '@mui/icons-material/Code'
import LayersClearIcon from '@mui/icons-material/LayersClear'

const Topbar = ({ editor }) => {
  // Global state
  const ui = useStoreState(state => state.ui)
  //

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

  // Handle show code
  const handleOpenExport = () => {
    editor.Commands.run('export-template')
  }
  //

  // Handle canvas clear
  const handleCanvasClear = () => {
    if (window.confirm('Are you sure you want to clear the canvas?')) {
      editor.Commands.run('CanvasClear')
    }
  }
  //

  return (
    <Box
      sx={{
        width: ui.editorTopBarWidth,
        height: ui.editorTopBarHeight,
        backgroundColor: '#003B30',
        color: '#F5CE31',
        px: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        height: ui.editorTopBarHeight
      }}
      >
        <img src='/lemon.png' alt='Lemon Builder Logo' height='80%' />
        <Typography sx={{ ml: 1 }} variant='h6' component='h1'>
          Lemon Builder
        </Typography>
      </Box>
      <Box sx={{ display: 'inline' }}>
        <Tooltip title="Toggle element's borders" onClick={handleToggleBorders}>
          <IconButton color='primary'>
            <BorderClearIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Show code' onClick={handleOpenExport}>
          <IconButton color='primary'>
            <CodeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Clear all' onClick={handleCanvasClear}>
          <IconButton color='primary'>
            <LayersClearIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Topbar
