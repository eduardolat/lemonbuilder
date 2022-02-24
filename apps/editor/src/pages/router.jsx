import { Route, Switch } from 'wouter'
import Home from './Home'
import Login from './Auth/pages/Login'
import Editor from './Editor'
import Error404 from './Error404'

const Router = () => {
  return (
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/editor' component={Editor} />
      <Route path='/auth/login' component={Login} />
      <Route component={Error404} />
    </Switch>
  )
}

export default Router
