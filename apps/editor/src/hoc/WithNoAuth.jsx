import { Redirect } from 'wouter'
import { useStoreState } from 'easy-peasy'
import { FullScreenLoading } from '@/components'

const WithNoAuth = ({ children }) => {
  const auth = useStoreState(state => state.auth)

  if (auth.loading) {
    return <FullScreenLoading />
  }

  if (auth.token != null) return <Redirect to='/editor' />

  return (
    <>{children}</>
  )
}

export default WithNoAuth

export const withNoAuthWrapper = Component => {
  return <WithNoAuth><Component /></WithNoAuth>
}
