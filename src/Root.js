import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import HeaderBar from './components/HeaderBar'
import SigninContainer from './containers/SigninContainer'
import AuthContainer from './containers/AuthContainer'
import HomeContainer from './containers/HomeContainer'
import HobbyContainer from './containers/HobbyContainer'
import Signout from './components/Signout'

const Root = () => (
  <App>
    <div>
      <HeaderBar />
      <Switch>
        <Route exact path='/sign_in' component={SigninContainer}/>
        <AuthContainer>
          <Switch>
            <Route exact path='/' component={HomeContainer}/>
            <Route exact path='/hobbies' component={HobbyContainer} />
            <Route exact path='/sign_out' component={Signout} />
          </Switch>
        </AuthContainer>
      </Switch>
    </div>
  </App>
)

export default Root
