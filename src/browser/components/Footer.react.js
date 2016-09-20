import React, { Component } from 'react'
import { Link } from 'react-router'
import LoginForm from './LoginForm.react.js'

export default class Footer extends Component {
  handleLogout(e) {
      e.preventDefault()
      this.props.logout()
  }

  render() {
      return (
        <div>
          { this.props.auth.isLoggedIn
            ? <p>Logged in as {this.props.auth.email} <button onClick={this.handleLogout.bind(this)}>Logout</button></p>
            : <p>Not logged in</p>
          }
          <Link onlyActiveOnIndex activeStyle={{ "fontWeight": "bold" }} to="/">Input</Link>
          <Link activeStyle={{ "fontWeight": "bold" }} to="/output">Output</Link>
        </div>
      )
  }
}
