import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signOut } from '../actions'

class Signout extends React.Component {
  componentWillMount() {
    this.props.dispatch(signOut())
  }

  render() {
    return (
      <Redirect to='/sign_in' />
    )
  }
}

export default connect()(Signout)
