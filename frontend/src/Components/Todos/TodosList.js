import TodoComponent from './TodoComponent'
import './styles.css'

export default function TodosList (props) {
    const all_todos = props.todos

    return (
        <>
            <h1 className="todo-title">List of Todos</h1>
            {all_todos.map(todo => <TodoComponent key={todo._id} todo={todo}/> )}
        </>
    )
}