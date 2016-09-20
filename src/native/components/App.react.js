import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../actions/actions'
import GratefulList from './GratefulList.react.js'

function mapStateToProps(state){
  return {
    gratefuls: state.gratefuls,
    auth: state.auth,
    ui: state.ui,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(GratefulList)

export default App
