import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { deleteTodo, updateTodo } from "../../actions/todos"
import './styles.css'

export default function TodoComponent (props) {
    const dispatch = useDispatch()
    const [currentTodo] = useState(props.todo._id)
    const [currentTodoData, setCurrentTodoData] = useState({...props.todo, completed: !props.todo.completed})
    const all_users = useSelector(state => state.users)
    const user_id = props.todo.user
    const current_user = all_users.find(user => user._id === user_id)

    const displayDate = (date_from_db) => {
        const time = date_from_db
        const year = time.slice(0,4)
        const month = time.slice(5,7)
        const day = time.slice(8,10)
        return `${day}.${month}.${year}`
    }


    return (
        <>
            <div className={props.todo.completed ? "todo-card-completed" : "todo-card"}>
                Who? {current_user ? current_user.username + ' ': '...loading'}
                <div className="date">Eingetragen am: {displayDate(props.todo.createdAt)}</div>
                <div className="description"> Beschreibung: {props.todo.description}</div>
                <div>{props.todo.completed ? "DONE" : "NOTDONE" }</div>
                <div className="controlls">
                    <button onClick={() => dispatch(deleteTodo(currentTodo))}>Loeschen</button>
                    <button onClick={() => dispatch(updateTodo(currentTodo, currentTodoData, setCurrentTodoData))}>Erledigt</button>
                </div>
           </div>   
        </>
    )
}