import React, { Component } from 'react';
import Button from './Button.react.js'
import { Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../../actions/actions'

function mapStateToProps(state, ownProps){
  return {
    auth: state.auth,
    ui: state.ui,
  }
}

class LogoutButton extends Component {

  render() {
    const {logout, uid} = this.props
    return <TouchableHighlight onPress={() => logout(uid)}><Text>Logout</Text></TouchableHighlight>
  }
}

export default connect(mapStateToProps, { logout })(LogoutButton)
