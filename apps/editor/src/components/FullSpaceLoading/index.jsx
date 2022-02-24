import PropTypes from 'prop-types'
import { Box, CircularProgress, Typography } from '@mui/material'

export const FullSpaceLoading = ({ text = '', minHeight = '' }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...minHeight && { minHeight }
      }}
    >
      <CircularProgress />
      {text && <Typography variant='h6' component='span' sx={{ mt: 1 }}>{text}</Typography>}
    </Box>
  )
}

FullSpaceLoading.propTypes = {
  text: PropTypes.string,
  minHeight: PropTypes.string
}

export default FullSpaceLoading
