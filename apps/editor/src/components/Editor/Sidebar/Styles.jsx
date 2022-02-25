import { Box, Typography } from '@mui/material'

const Styles = () => {
  return (
    <Box>
      <Box sx={{ p: 1 }}>
        <Typography variant='h6' component='h2'>Styles</Typography>
      </Box>

      <Box
        id='lemon-editor-styles'
        sx={{
          height: '100%',
          width: '100%'
        }}
      />
    </Box>
  )
}

export default Styles
