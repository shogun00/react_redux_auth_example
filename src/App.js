import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HeaderBar from './components/HeaderBar'
import SigninContainer from './containers/SigninContainer'
import HomeContainer from './containers/HomeContainer'
import HobbyContainer from './containers/HobbyContainer'
import * as authActions from './actions/index'

class App extends React.Component {
  componentWillMount() {
    this.props.authActions.checkAuth()
  }

  render() {
    const auth = this.props.auth
    const { fetchUser, clickSignOut } = this.props.authActions
    return (
      <div>
        <HeaderBar auth={auth} onClick={clickSignOut} />
        <div style={{ padding: 10 }}>
          {auth.isLoggedIn ? (
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/hobbies" component={HobbyContainer} />
              </Switch>
            </BrowserRouter>
          ) : <SigninContainer auth={auth} onSubmit={fetchUser} />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth.auth
})

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
