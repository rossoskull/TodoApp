export const createTodo = todo => {
    return (dispatch, todo) => {
        // Run async calls

        dispatch({type: 'CREATE_TODO', todo})
    }
}