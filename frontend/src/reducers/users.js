
export const usersReducer = (state = [] , action ) => {
    if (action.type === "GET_USERS"){
        return {
            ...state,
            users: action.payload
        }
    }
    return state
}