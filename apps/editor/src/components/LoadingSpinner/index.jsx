import PropTypes from 'prop-types'
import { Box, CircularProgress } from '@mui/material'

export const LoadingSpinner = ({ fullWidth = true, size = 40 }) => {
  return (
    <Box
      sx={{
        width: fullWidth ? '100%' : 'auto',
        height: `${size}px`,
        display: fullWidth ? 'flex' : 'inline-block',
        ...fullWidth && {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }}
    >
      <CircularProgress size={size} />
    </Box>
  )
}

LoadingSpinner.propTypes = {
  fullWidth: PropTypes.bool,
  size: PropTypes.number
}

export default LoadingSpinner
