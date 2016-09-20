import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

import App from './components/App.react.js'
import Input from './components/Input.react.js'
import Output from './components/Output.react.js'
import store from '../store'

import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
const history = syncHistoryWithStore(browserHistory, store)

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Input}/>
        <Route path='/input' component={Input}/>
        <Route path='/output' component={Output}/>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
