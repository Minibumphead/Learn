import axios from 'axios'

const USERS_URL = 'http://localhost:5000/users'

export async function getUsers (dispatch, getState) {
    try {
        const {data} = await axios.get(USERS_URL)
    dispatch( { type: 'GET_USERS', payload: data})
    } catch(error) {
        console.log(error)
    }
}

// form data function returns async function
// async function makes call to api
export const createUser = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.post(USERS_URL, formData)
        dispatch({type: 'CREATE_USER', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = (user_id) => async (dispatch) => {
    try {
        const delete_url = `${USERS_URL}/${user_id}`
        const {data} = await axios.delete(delete_url)
        dispatch({type: 'DELETE_USER', payload: data})
    } catch (error) {
        console.log(error)
    }
}