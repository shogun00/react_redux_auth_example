import React from 'react'
import { Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Route children={this.props.children} />
      </div>
    )
  }
}

export default App
