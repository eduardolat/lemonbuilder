import { Box, Typography } from '@mui/material'

const Traits = () => {
  return (
    <Box>
      <Box sx={{ p: 1 }}>
        <Typography variant='h6' component='h2'>Settings</Typography>
      </Box>

      <Box
        id='lemon-editor-traits'
        sx={{
          height: '100%',
          width: '100%'
        }}
      />
    </Box>
  )
}

export default Traits
