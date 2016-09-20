import React, { Component } from 'react'

export default class Grateful extends Component {

  handleRemove(e) {
    e.preventDefault();
    this.props.removeGrateful(this.props.i, this.props.uid)
  }

  render() {
      const {text, i} = this.props
      return (
        <p>
          {text}
          <button onClick={ this.handleRemove.bind(this) }>&times;</button>
        </p>
      )
  }
}
