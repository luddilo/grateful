import React, { Component } from 'react'

export default class LoginForm extends Component {
  handleLogin(e) {
    e.preventDefault()
    this.props.login(this.refs.email.value, this.refs.password.value);
  }

  render() {
    return (
      <form ref="loginform" onSubmit={this.handleLogin.bind(this)}>
        <h2>Login</h2>
        <input ref="email" defaultValue="ludvig.linse@gmail.com" placeholder="email"></input>
        <input ref="password" defaultValue="asdfasdf" placeholder="password"></input>
        <button type="submit"></button>
      </form>
    )
  }
}
