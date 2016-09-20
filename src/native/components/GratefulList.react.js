import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Grateful from './Grateful.react.js'

export default class GratefulList extends Component {

  componentWillMount() {
    this.props.checkIfLoggedIn()
  }

  onEndEditing() {
    //
  }

  handleSubmit(e) {
    this.props.addGrateful(e.nativeEvent.text, this.props.auth.uid)
    this.refs["grateful"].clear()
  }

  render() {
      const { gratefuls } = this.props
      return (
        <View style={styles.container}>
            <View>
              <Text style={styles.welcome}>What are you grateful for today?</Text>
              <TextInput
                ref="grateful"
                onEndEditing={ this.onEndEditing }
                autoCorrect={false}
                editable={true}
                maxLength={40}
                height={60}
                placeholder="I'm grateful for..."
                onSubmitEditing={(e) => this.handleSubmit(e)}/>
            </View>
            {
              gratefuls.map((grateful, i) => {
                return <Grateful key={grateful.id} id={grateful.id} uid={this.props.auth.uid} text={grateful.text} removeGrateful={this.props.removeGrateful} />
              })
            }

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
