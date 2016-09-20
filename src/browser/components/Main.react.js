import React, { Component } from 'react'
import RegisterForm from './RegisterForm.react.js'
import LoginForm from './LoginForm.react.js'
import Footer from './Footer.react.js'
import './Style.css'

export default class Main extends Component {

  componentWillMount() {
    this.props.checkIfLoggedIn()
  }

  render() {
      return (
        <div>
          <div className={this.props.ui.isLoading ? "loading" : "hidden loading" }>&#8230;</div>
          <h1>Hi. Env: { process.env.NODE_ENV }</h1>
          {
            this.props.auth.isLoggedIn
            ? React.cloneElement(this.props.children, this.props)
            : <div><RegisterForm {...this.props}/><LoginForm {...this.props}/></div>
          }
          <Footer {...this.props}/>
        </div>
      )
  }
}
