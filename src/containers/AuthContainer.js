import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Route, Redirect } from 'react-router-dom'
import { existsAuth } from '../modules/auth'
import * as authActions from '../actions'

class AuthContainer extends React.Component {
  componentWillMount() {
    this.userWillTransfer(this.props)
  }

  componentWillUpdate(nextProps) {
    this.userWillTransfer(nextProps)
  }

  userWillTransfer = props => {
    if (!existsAuth()) {
      this.props.authActions.signOut()
    } else {
      const { user } = props.auth
      if (!user.id) {
        this.props.authActions.checkAuth()
      }
    }
  }

  render() {
    const { isLoggedIn } = this.props.auth
    return (
      isLoggedIn ? (
        <Route children={this.props.children} />
      ) : (
        <Redirect to='/sign_in' />
      )
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth.auth
})

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch)
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer))
