import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers'
import App from './components/App'
import { addTodo, toggleTodo } from './actions'

let store = createStore(todo)

store.dispatch(addTodo('Hello React'))
store.dispatch(addTodo('Hello React'))
store.dispatch(toggleTodo(0))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
