import { Redirect } from 'wouter'
import { useStoreState } from 'easy-peasy'
import { FullScreenLoading } from '@/components'

export const WithAuthWrapper = ({ children }) => {
  const auth = useStoreState(state => state.auth)

  if (auth.loading) {
    return <FullScreenLoading />
  }

  if (auth.token == null) return <Redirect to='/auth/login' />

  return (
    <>{children}</>
  )
}

const withAuth = Component => props => {
  return <WithAuthWrapper><Component {...props} /></WithAuthWrapper>
}

export default withAuth
