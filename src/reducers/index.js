import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { gratefuls } from './gratefuls'
import { auth } from './auth'
import { ui } from './ui'

const rootReducer = combineReducers({
  routing: routerReducer, //for react browser only. Should be conditioned really, but meh..
  gratefuls,
  auth,
  ui
});

export default rootReducer;
