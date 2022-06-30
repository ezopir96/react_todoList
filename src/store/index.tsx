import { createStore, combineReducers, applyMiddleware } from 'redux'
// ⚡⚡ reduxjs/toolkit ⚡⚡
import todolistReducer from './module/todolist'

import thunk from 'redux-thunk'

const reducer = combineReducers({
  todolist: todolistReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
