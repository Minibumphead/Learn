const initialState = []
export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_USERS':
            return action.payload
        case 'CREATE_USER':
            return [...state, action.payload]
        case 'DELETE_USER':
            return action.payload
        default: 
            return state
    }
}