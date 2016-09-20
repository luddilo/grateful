import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class Button extends Component {

  render() {
    const { children, style } = this.props;
    return (
      <TouchableOpacity
        //activeOpacity={style.activeOpacity}
        //style={style}
        {...this.props}
      >
        <Text>{children}</Text>
      </TouchableOpacity>
    );
  }

}
