export const createTodo = todo => {
    return (dispatch, todo, { getFirebase, getFirestore }) => {
        // Run async calls

        dispatch({type: 'CREATE_TODO', todo})
    }
}