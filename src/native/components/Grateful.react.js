import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Button from './Button.react.js'

export default class Grateful extends Component {

  handleRemove() {
    this.props.removeGrateful(this.props.id, this.props.uid)
  }

  render() {
      const {text, id} = this.props
      return (
        <View style={style.row}>
          <Text>{text}</Text>
          <Button onPress={ this.handleRemove.bind(this) }>&times;</Button>
        </View>
      )
  }
}

const style = StyleSheet.create({
  row: {
    alignItems: "center"
  }
})
