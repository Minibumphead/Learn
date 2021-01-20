import { combineReducers } from 'redux'
import { usersReducer } from './users'
import { todosReducer } from './todos'

// note that combineReducers will only take on Javascript object with the Keys being the names of how to access the states defined
// within the global state and the value being the reducer for each given state

// {
//     userstate: usersReducer,
//     todosstate: todosReducer,
//     someotherstate: someotherReducer, ...
// }


export default combineReducers({
        todos: todosReducer, 
        users: usersReducer
})