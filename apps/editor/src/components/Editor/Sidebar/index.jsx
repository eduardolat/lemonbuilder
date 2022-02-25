import { Box, IconButton, Stack, Tooltip } from '@mui/material'
import { useStoreState } from 'easy-peasy'
import { useState } from 'react'
import LayersIcon from '@mui/icons-material/Layers'
import WidgetsIcon from '@mui/icons-material/Widgets'
import BrushIcon from '@mui/icons-material/Brush'
import SettingsIcon from '@mui/icons-material/Settings'

import Blocks from './Blocks'
import Layers from './Layers'
import Styles from './Styles'
import Traits from './Traits'

const Sidebar = ({ editor }) => {
  const ui = useStoreState(state => state.ui)

  const [activeTab, setActiveTab] = useState('blocks')

  return (
    <Box sx={{
      width: `${ui.editorSidebarWidth}px`,
      height: `${ui.editorSidebarHeight}px`,
      backgroundColor: '#444444',
      borderRight: 2,
      borderColor: '#444444',
      color: '#FFFFFF'
    }}
    >
      <Box sx={{
        height: `${ui.editorSidebarContentHeight}px`,
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
      >
        <Box sx={{
          display: activeTab !== 'blocks' ? 'none' : 'block'
        }}
        >
          <Blocks editor={editor} />
        </Box>
        <Box sx={{
          display: activeTab !== 'styles' ? 'none' : 'block'
        }}
        >
          <Styles editor={editor} />
        </Box>
        <Box sx={{
          display: activeTab !== 'traits' ? 'none' : 'block'
        }}
        >
          <Traits editor={editor} />
        </Box>
        <Box sx={{
          display: activeTab !== 'layers' ? 'none' : 'block'
        }}
        >
          <Layers editor={editor} />
        </Box>
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: `${ui.editorSidebarNavHeight}px`,
        backgroundColor: '#efefef'
      }}
      >
        <Box>
          <Stack direction='row' spacing={1}>
            <Tooltip title='Blocks'>
              <IconButton
                onClick={() => setActiveTab('blocks')}
                color={activeTab === 'blocks' ? 'secondary' : undefined}
              >
                <WidgetsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Styles'>
              <IconButton
                onClick={() => setActiveTab('styles')}
                color={activeTab === 'styles' ? 'secondary' : undefined}
              >
                <BrushIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Settings'>
              <IconButton
                onClick={() => setActiveTab('traits')}
                color={activeTab === 'traits' ? 'secondary' : undefined}
              >
                <SettingsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Layers'>
              <IconButton
                onClick={() => setActiveTab('layers')}
                color={activeTab === 'layers' ? 'secondary' : undefined}
              >
                <LayersIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
