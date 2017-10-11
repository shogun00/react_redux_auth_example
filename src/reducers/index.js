import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth'
import hobby from './hobby'

const rootReducer = combineReducers({
  auth,
  hobby,
  router: routerReducer
})

export default rootReducer
