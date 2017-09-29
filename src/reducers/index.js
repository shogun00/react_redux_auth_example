import { combineReducers } from 'redux'
import auth from './auth'
import hobby from './hobby'

const rootReducer = combineReducers({
  auth,
  hobby
})

export default rootReducer
