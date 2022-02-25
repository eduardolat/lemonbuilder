import { Redirect } from 'wouter'
import { useStoreState } from 'easy-peasy'
import { FullScreenLoading } from '@/components'

const WithNoAuthWrapper = ({ children }) => {
  const auth = useStoreState(state => state.auth)

  if (auth.loading) {
    return <FullScreenLoading />
  }

  if (auth.token != null) return <Redirect to='/editor' />

  return (
    <>{children}</>
  )
}

export const withNoAuth = Component => props => {
  return <WithNoAuthWrapper><Component {...props} /></WithNoAuthWrapper>
}

export default withNoAuth
