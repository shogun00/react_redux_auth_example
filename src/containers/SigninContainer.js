import React from 'react'
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';

export default class SigninContainer extends React.Component {
  state = {
    errors: [],
    email: '',
    password: ''
  }

  handleChange = (attr, value) => {
    this.setState({...this.state, [attr]: value})
  }

  handleSubmit = e => {
    e.preventDefault()
    let errors = []
    if (this.state.email.length == 0) {
      errors.push('email can not be blank!')
    }
    if (this.state.password.length == 0) {
      errors.push('password can not be blank!')
    }
    if (errors.length > 0) {
      console.log('NG')
    } else {
      let params = {
        email: this.state.email,
        password: this.state.password
      }
      this.props.onSubmit(params)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ width: 300, margin: 'auto'}} >
        <Input type='email' label='Email' name='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
        <Input type='text' label='Password' name='password' value={this.state.password} onChange={this.handleChange.bind(this, 'password')} />
        <Button type='submit' label="Sign in" primary raised style={{ width: 300}}/>
      </form>
    )
  }
}
