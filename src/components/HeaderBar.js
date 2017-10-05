import React from 'react'
import { connect } from 'react-redux'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import { Link } from 'react-router-dom'

const HeaderBar = ({ auth }) => (
  <AppBar title='Auth Demo'>
    <Navigation type='horizontal'>
      { auth.isLoggedIn && <Link to='/sign_out'>Sign out</Link>}
    </Navigation>
  </AppBar>
)

const mapStateToProps = state => ({
  auth: state.auth.auth
})

export default connect(
  mapStateToProps
)(HeaderBar)
