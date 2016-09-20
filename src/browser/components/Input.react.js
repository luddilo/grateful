import React, { Component } from 'react'
import Grateful from './Grateful.react.js'
import _ from 'lodash'

export default class Input extends Component {

  componentWillMount() {
      this.props.fetchTodaysGratefulsFromFirebase(this.props.auth.uid)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addGrateful(this.refs.grateful.value, this.props.auth.uid)
    this.refs.inputForm.reset()
  }

  render() {
      let gratefuls = []
      _.each(this.props.gratefuls, (grateful, i) => {
        gratefuls.push(<Grateful removeGrateful={this.props.removeGrateful} text={grateful.text} i={i} uid={this.props.auth.uid} key={i}/>)
      })

      return (
        <div>
          <form ref="inputForm" onSubmit={this.handleSubmit.bind(this)}>
            <p>What are you grateful for today?</p>
            <input ref="grateful" placeholder="I'm grateful for..."></input>
            <input type="submit" hidden/>
          </form>

          {gratefuls}

        </div>
      )
  }
}
