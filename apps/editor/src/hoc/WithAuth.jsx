import { Redirect } from 'wouter'
import { useStoreState } from 'easy-peasy'
import { FullScreenLoading } from '@/components'

const WithAuth = ({ children }) => {
  const auth = useStoreState(state => state.auth)

  if (auth.loading) {
    return <FullScreenLoading />
  }

  if (auth.token == null) return <Redirect to='/auth/login' />

  return (
    <>{children}</>
  )
}

export default WithAuth

export const withAuthWrapper = Component => {
  return <WithAuth><Component /></WithAuth>
}
