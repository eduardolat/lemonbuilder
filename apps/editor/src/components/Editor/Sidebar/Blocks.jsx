import { Box, Typography } from '@mui/material'

const Blocks = ({ editor }) => {
  return (
    <Box>
      <Box sx={{ p: 1 }}>
        <Typography variant='h6' component='h2'>Blocks</Typography>
      </Box>

      <Box
        id='lemon-editor-blocks'
        sx={{
          height: '100%',
          width: '100%'
        }}
      />
    </Box>
  )
}

export default Blocks
