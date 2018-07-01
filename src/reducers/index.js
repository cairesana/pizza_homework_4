import { combineReducers } from 'redux'
import baseReducer from './baseReducer'
import sauceReducer from './sauceReducer'
import toppingsReducer from './toppingsReducer'


export default combineReducers({
  baseReducer,
  sauceReducer,
  toppingsReducer,
})
