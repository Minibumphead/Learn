import axios from 'axios'

const TODOS_URL = 'http://localhost:5000/todos'

export const getTodos = () => async(dispatch) => {
   try {
        const { data } = await axios.get(TODOS_URL)
        dispatch( {type: 'GET_TODOS', payload: data})
       
   } catch (error) {
       console.log(error)
   }
}