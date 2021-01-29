import { useSelector, useStore } from 'react-redux'
import { useState } from 'react'
import TodoComponent from '../Todos/TodoComponent'

export default function UserDetails(props) { 
    // props.user is the id of the "current User" which is set in UserComponent.js 
    const all_todos = useSelector(state => state.todos)
    const todos_current_user = all_todos.filter(todo => todo.user === props.user._id )




 

    
    return (
        <>
           <div style={{color: 'white'}}>Number of Todos: ({todos_current_user.length})</div>
           {todos_current_user.map(todo => <TodoComponent key={todo._id} todo={todo}/>)}
        </>
    )
}