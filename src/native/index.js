import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import App from './components/App.react.js'
import Login from './components/Login.react.js'
import LogoutButton from './components/LogoutButton.react.js'
import { Actions } from 'react-native-router-flux';
import { logout } from '../actions/actions'

import store from '../store'

const ConnectedRouter = connect()(Router)

class Grateful extends Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter>
          <Scene key="root">
            <Scene key="loginPage" title="Log in to Grateful" component={Login} initial={true}/>
            <Scene key="gratefulPage" title="Be Grateful :)" component={App} renderRightButton={(route) => <LogoutButton logout={logout}/>}/>
          </Scene>
        </ConnectedRouter>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Grateful', () => Grateful);
