import {REHYDRATE} from 'redux-persist/constants'
import { Db } from '../actions/actions'

export function auth(state = {isLoggedIn: false}, action) {
  switch (action.type) {
    case 'SIGNED_IN':
      return {
        isLoggedIn: true,
        email: action.payload.email,
        uid: action.payload.uid
      }
      break
    case 'SIGNED_OUT':
      return {
        isLoggedIn: false,
      }
      break
  }
  return state
}
