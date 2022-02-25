import { Box, Typography } from '@mui/material'

const Layers = () => {
  return (
    <Box>
      <Box sx={{ p: 1 }}>
        <Typography variant='h6' component='h2'>Layers</Typography>
      </Box>

      <Box
        id='lemon-editor-layers'
        sx={{
          height: '100%',
          width: '100%'
        }}
      />
    </Box>
  )
}

export default Layers
