import {createStore} from 'redux'
import TodoListReducer from './todoListSlice'

const store = createStore(TodoListReducer)

export default store