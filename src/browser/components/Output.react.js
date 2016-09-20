import React, { Component } from 'react'
import Grateful from './Grateful.react.js'

export default class Output extends Component {

  getRandomIntExclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomKeyFromObject(object) {
    let keys = Object.keys(object)
    return keys[this.getRandomIntExclusive(0, keys.length)]
  }

  render() {

      let grateful
      if (this.props.gratefuls && Object.keys(this.props.gratefuls).length != 0) {
        const gratefuls = this.props.gratefuls
        const id = this.getRandomKeyFromObject(gratefuls)
        grateful = <Grateful removeGrateful={this.props.removeGrateful} text={gratefuls[id].text} i={id} key={id}/>
      }
      else {
        grateful = <p>Nothing yet..</p>
      }

      return (
        <div>
          <h1>A year ago you said:</h1>
          {grateful}
          <button>One more! - FIX  :) </button>
        </div>
      )
  }
}
