import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as hobbyActions from '../actions/hobby'

class HobbyContainer extends React.Component {
  componentWillMount() {
    this.props.hobbyActions.fetchHobbies()
  }

  render() {
    const { hobbies } = this.props
    return (
      <div>
        <h1>Hobbies</h1>
        {hobbies.map(hobby => (
          <ul key={hobby.id}>
            <li>{hobby.name}</li>
          </ul>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth.auth,
  hobbies: state.hobby.hobbies
})

const mapDispatchToProps = dispatch => ({
  hobbyActions: bindActionCreators(hobbyActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HobbyContainer)
