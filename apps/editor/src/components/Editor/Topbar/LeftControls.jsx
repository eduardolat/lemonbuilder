import { Box, Typography } from '@mui/material'
import { useStoreState } from 'easy-peasy'

const LeftControls = () => {
  // Global state
  const ui = useStoreState(state => state.ui)
  //

  return (
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
  )
}

export default LeftControls
