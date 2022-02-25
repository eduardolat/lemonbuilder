
import { Box, Grid } from '@mui/material'
import { useStoreState } from 'easy-peasy'

import RightControls from './RightControls'
import ResponsiveSwitch from './ResponsiveSwitch'
import LeftControls from './LeftControls'

const Topbar = ({ editor }) => {
  // Global state
  const ui = useStoreState(state => state.ui)
  //

  return (
    <Box
      sx={{
        width: ui.editorTopBarWidth,
        height: ui.editorTopBarHeight,
        backgroundColor: '#EFEFEF',
        borderBottom: 2,
        borderColor: '#444444',
        px: 2
      }}
    >
      <Grid container>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
          <LeftControls editor={editor} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ResponsiveSwitch editor={editor} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
          <RightControls editor={editor} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Topbar
