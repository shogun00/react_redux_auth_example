import React from 'react'
import { connect } from 'react-redux'
import Signin from '../components/Signin'

const mapStateToProps = state => ({
  auth: state.auth.auth
})
export default connect(
  mapStateToProps
)(Signin)
