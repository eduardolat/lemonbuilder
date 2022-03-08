import { Redirect } from 'wouter'
import useSWR from 'swr'
import { useStoreState } from 'easy-peasy'
import { FullScreenLoading } from '@/components'
import { fetcher } from '@/helpers/fetchers'

const HomeSetupRedirect = () => {
  const { data, error } = useSWR('/system/setup-status', fetcher)

  if (error) return <div>failed to load</div>

  if (!data) {
    return <FullScreenLoading />
  }

  if (data.setupFinished === false) {
    return <Redirect to='/setup' />
  }

  return <HomeAuthRedirect />
}

const HomeAuthRedirect = () => {
  const auth = useStoreState(state => state.auth)

  if (auth.loading) {
    return <FullScreenLoading />
  }

  if (auth.user == null) return <Redirect to='/auth/login' />

  if (auth.user != null) return <Redirect to='/editor' />

  return null
}

export default function Home () {
  return <HomeSetupRedirect />
}
