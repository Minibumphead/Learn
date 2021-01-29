import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../../actions/todos'

export default function CreateTodoForm (props) {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        todo: 'Kueche',
        user: props.user._id,
        description: '',
        completed: false
    })

    const clear = () => {
        setFormData({
            todo: 'Kueche',
            user: props.user._id,
            description: '',
            completed: false
        })
    }


    const handleChange = (event) => {
        if (event.target.name === "todo") {
            setFormData({...formData, todo: event.target.value})
        } else if (event.target.name === "description") {
            setFormData({...formData, description: event.target.value})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //add frontend validation here
        dispatch(createTodo(formData))
        clear()
    }
    
    return (
        <>
            <form>
                <select label="Aufgbabe" name="todo" onChange={handleChange} value={formData.todo}>
                        <option value="Kueche">Kueche</option>
                        <option value="Bad">Bad</option>
                        <option value="Gang">Gang</option>
                        <option value="Sonstiges">Sonstiges</option>
                </select>
                <input  type="text" 
                        name="description" 
                        label="description" 
                        value={formData.description}
                        onChange={handleChange} 
                        >        
                </input>
                <button type="submit" onClick={handleSubmit}>Add Todo</button>
            </form>
        </>
    )
}