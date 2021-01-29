import axios from 'axios'

const TODOS_URL = 'http://localhost:5000/todos'

export async function getTodos(dispatch, getState) {
    const { data } = await axios.get(TODOS_URL)
    dispatch({ type: 'GET_TODOS', payload: data})
}

export const createTodo = (formData) => async (dispatch) => {
    const { data } = await axios.post(TODOS_URL, formData)
    dispatch({type: 'CREATE_TODO', payload: data})
}

export const deleteTodo = (todo_id) => async (dispatch) => {
    try {
        const delete_url = `${TODOS_URL}/${todo_id}`
        const { data } = await axios.delete(delete_url)
        dispatch({type: 'DELETE_TODO', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updateTodo = (todo_id, todoData) => async(dispatch) => {
    try {
        const update_url = `${TODOS_URL}/${todo_id}`
        const { data } = await axios.patch(update_url, todoData)
        dispatch({type: 'UPDATE_TODO', payload: data})
    } catch (error) {
        console.log(error)
    }
}