import { Redirect } from 'wouter'
import { useStoreState } from 'easy-peasy'
import { FullScreenLoading } from '@/components'

const Home = () => {
  const auth = useStoreState(state => state.auth)

  if (auth.loading) {
    return <FullScreenLoading />
  }

  if (auth.user == null) return <Redirect to='/auth/login' />

  if (auth.user != null) return <Redirect to='/editor' />

  return null
}

export default Home
