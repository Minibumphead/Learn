
export const todosReducer = (todos = [] , action ) => {

    if (action.type === 'GET_TODOS'){
        return action.payload
    }
    return todos
}
