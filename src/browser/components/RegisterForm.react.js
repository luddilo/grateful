import React, { Component } from 'react'

export default class RegisterForm extends Component {
  handleSubmit(e) {
    e.preventDefault()
    this.props.register(this.refs.email.value, this.refs.password.value, this.refs.name.value);
  }

  render() {
    return (
      <form ref="registerForm" onSubmit={this.handleSubmit.bind(this)}>
        <h2>Register</h2>
        <input ref="name" defaultValue="ludvig linse" placeholder="name"></input>
        <input ref="email" defaultValue="ludvig.linse@gmail.com" placeholder="email"></input>
        <input ref="password" defaultValue="asdfasdf" placeholder="password"></input>
        <button type="submit"></button>
      </form>
    )
  }
}
