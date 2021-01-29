import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// ---------------------------------------------------------------
import App from './App'
import reducers from './reducers/index'
import { getTodos } from './actions/todos'
import { getUsers } from './actions/users'

const store =  createStore(reducers, compose(applyMiddleware(thunk), 
                                              window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                                            )
                                          )

// loading initial users and todos into state
store.dispatch(getTodos)
store.dispatch(getUsers)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root')
);
