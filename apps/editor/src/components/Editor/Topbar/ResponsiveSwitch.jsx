import { useState } from 'react'
import { Button, ButtonGroup, IconButton, Tooltip, Box, Typography } from '@mui/material'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { SimpleModal } from '@/components'

const ResponsiveSwitch = ({ editor }) => {
  const [currentDevice, setCurrentDevice] = useState('Desktop')
  const [isHelpOpen, setIsHelpOpen] = useState(false)

  const handleSetMobile = () => {
    editor.setDevice('Mobile')
    setCurrentDevice('Mobile')
  }
  const handleSetTablet = () => {
    editor.setDevice('Tablet')
    setCurrentDevice('Tablet')
  }
  const handleSetDesktop = () => {
    editor.setDevice('Desktop')
    setCurrentDevice('Desktop')
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box>
        <ButtonGroup size='small'>
          <Tooltip title='Desktop view (full width)'>
            <Button variant={currentDevice === 'Desktop' ? 'contained' : 'outlined'}>
              <DesktopWindowsIcon onClick={handleSetDesktop} sx={{ width: '20px' }} />
            </Button>
          </Tooltip>
          <Tooltip title='Tablet view (max width 768px)'>
            <Button variant={currentDevice === 'Tablet' ? 'contained' : 'outlined'}>
              <TabletAndroidIcon onClick={handleSetTablet} sx={{ width: '20px' }} />
            </Button>
          </Tooltip>
          <Tooltip title='Mobile view (max width 480px)'>
            <Button variant={currentDevice === 'Mobile' ? 'contained' : 'outlined'}>
              <PhoneAndroidIcon onClick={handleSetMobile} sx={{ width: '20px' }} />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </Box>

      <IconButton sx={{ ml: 1 }} onClick={() => setIsHelpOpen(true)}>
        <HelpOutlineIcon />
      </IconButton>

      <SimpleModal open={isHelpOpen} onClose={() => setIsHelpOpen(false)}>
        <Typography variant='h6' component='h3'>
          Screen breakpoints
        </Typography>

        <Typography sx={{ mt: 1 }}>
          Breakpoints are used to style elements based on the width of the device on which they
          will be printed.
        </Typography>

        <Typography sx={{ mt: 1 }}>
          All devices with a width <b>less than 480px are considered mobile</b>, those with a width
          <b>less than 768px are considered tablets</b>, and <b>the rest are considered desktops.</b>
        </Typography>
      </SimpleModal>
    </Box>
  )
}

export default ResponsiveSwitch
