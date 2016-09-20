import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { login } from '../../actions/actions'

function mapStateToProps(state){
  return {
    auth: state.auth,
    ui: state.ui,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ login }, dispatch);
}

class Login extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit() {
    this.props.login(this.state.email, this.state.password)
  }

  render() {
      return (
        <View style={styles.container}>
              <Text style={styles.welcome}>Welcome to Grateful</Text>

              <TextInput
                ref="email"
                onChangeText={(email) => this.setState({email})}
                autoCorrect={false}
                editable={true}
                maxLength={40}
                height={60}
                placeholder="Email"
              />

              <TextInput
                ref="password"
                onChangeText={(password) => this.setState({password})}
                autoCorrect={false}
                editable={true}
                maxLength={40}
                height={60}
                placeholder="Password"
                onSubmitEditing={this.handleSubmit.bind(this)}
                secureTextEntry
              />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
