export const createTodo = todo => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('todos').add({
            ...todo,
            date: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_TODO', todo})
        }).catch(e => {
            dispatch({type: 'CREATE_TODO_ERROR', err: e})
        })
    }
}