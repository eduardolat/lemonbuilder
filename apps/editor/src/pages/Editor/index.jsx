import { Editor } from '@/components'
import withAuth from '@/hoc/WithAuth'

const EditorPage = () => {
  return (
    <div>
      <Editor />
    </div>
  )
}

export default withAuth(EditorPage)
