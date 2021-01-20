import axios from 'axios'

const USERS_URL = 'http://localhost:5000/users'

export const getUsers = () => async (dispatch) => {
    try {
        const {data} = await axios.get(USERS_URL);
        
        return {
            type: "GET_USERS",
            payload: data,
        };
    } catch (error) {
        console.log(error)
    }
}