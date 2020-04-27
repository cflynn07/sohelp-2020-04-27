import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import App from './components/App'

const initialState = null
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER': {
      return Object.assign({}, action.user)
    }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  (<Provider store={store}>
    <App store={store} />
  </Provider>),
  document.getElementById('root'))
