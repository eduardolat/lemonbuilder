import { useLayoutEffect } from 'react'
import { Box } from '@mui/material'

const Blocks = ({ editor }) => {
  useLayoutEffect(() => {
    if (editor == null) return

    editor.BlockManager.add({
      id: 'section-block',
      label: '<b>Section</b>',
      attributes: { class: 'gjs-block-section' },
      content: `<section>
        <h1>This is a simple title</h1>
        <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
      </section>`
    })
  }, [editor])

  return (
    <Box
      id='lemon-editor-blocks'
      sx={{
        height: '100%',
        width: '100%',
        backgroundColor: 'primary.main'
      }}
    />
  )
}

export default Blocks
