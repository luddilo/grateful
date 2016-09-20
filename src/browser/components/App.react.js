import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../actions/actions'
import { Link } from 'react-router'
import Main from './Main.react.js'

function mapStateToProps(state){
  return {
    gratefuls: state.gratefuls,
    auth: state.auth,
    ui: state.ui
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
