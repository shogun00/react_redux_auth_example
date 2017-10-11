import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'
import rootReducer from './reducers'
import App from './App'
import Root from './Root'
import { composeWithDevTools } from 'redux-devtools-extension';

const history = createHistory()
const middleware = [
  thunk,
  routerMiddleware(history)
]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
