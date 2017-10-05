import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './App'
import Root from './Root'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
)
