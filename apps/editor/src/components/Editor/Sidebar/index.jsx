import { Box } from '@mui/material'
import { useStoreState } from 'easy-peasy'
import Blocks from './Blocks'

const Sidebar = ({ editor }) => {
  const ui = useStoreState(state => state.ui)

  return (
    <Box sx={{
      width: `${ui.editorSidebarWidth}px`,
      height: `${ui.editorSidebarHeight}px`
    }}
    >
      <Blocks editor={editor} />
    </Box>
  )
}

export default Sidebar
