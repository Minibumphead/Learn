
const initialState = []
export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TODOS':
            return action.payload
        case 'CREATE_TODO':
            return [...state, action.payload]
        case 'DELETE_TODO':
            return action.payload
        case 'UPDATE_TODO':
            return [...state, action.payload]
        default:
            return state
    }
}

