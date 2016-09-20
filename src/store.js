import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import devTools from 'remote-redux-devtools';
import {persistStore, autoRehydrate} from 'redux-persist'
import { AsyncStorage } from 'react-native';

import rootReducer from './reducers/index'
import { addListeners } from './actions/actions'
import { Actions as Router } from 'react-native-router-flux'

const defaultState = {
}

const enhancer = compose(
  applyMiddleware(thunk),
  //devTools(),
  autoRehydrate()
)

const store = createStore(
  rootReducer,
  defaultState,
  enhancer
)

persistStore(store, {storage: AsyncStorage}, () => {
  const { auth, gratefuls } = store.getState()
  if (auth.isLoggedIn) {
    store.dispatch(addListeners(auth.uid))
    if (gratefuls.length > 0) {
        store.dispatch({
          type: 'PURGE_GRATEFULS'
        })
    }
    Router.gratefulPage()
  }
})



//devTools.updateStore(store)

export default store
