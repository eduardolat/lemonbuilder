import PropTypes from 'prop-types'
import {
  Box,
  IconButton,
  Modal,
  Tooltip
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export const SimpleModal = ({
  open,
  onClose,
  sx = {},
  width = '90%',
  maxWidth = '400px',
  height = 'auto',
  maxHeight = '90%',
  children
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: width,
        maxWidth: maxWidth,
        bgcolor: 'background.paper',
        borderRadius: 1,
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        height: height,
        maxHeight: maxHeight,
        overflowY: 'auto',
        ...sx
      }}
      >
        <Tooltip title='Cerrar ventana flotante'>
          <IconButton
            size='medium'
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              color: '#000000'
            }}
          >
            <CloseIcon fontSize='inherit' />
          </IconButton>
        </Tooltip>

        {children}
      </Box>
    </Modal>
  )
}

SimpleModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  widht: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidht: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sx: PropTypes.object
}

export default SimpleModal
