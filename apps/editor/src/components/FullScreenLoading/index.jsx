import PropTypes from 'prop-types'
import { Box, CircularProgress } from '@mui/material'

export const FullScreenLoading = ({ imagePath, imageWidth = 'auto', imageHeight = 'auto' }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {imagePath && (
        <Box
          component='img'
          src={imagePath}
          alt='Imagen de carga'
          width={imageWidth}
          height={imageHeight}
          sx={{ mb: 2 }}
        />
      )}
      <CircularProgress />
    </Box>
  )
}

FullScreenLoading.propTypes = {
  imagePath: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string
}

export default FullScreenLoading
