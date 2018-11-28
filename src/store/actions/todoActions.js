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

export const deleteTodo = id => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.delete({ collection: 'todos', doc: id})
        .then(() => {
            console.log('deleted')
            dispatch({type: 'DELETE_TODO'})
        })
        .catch(e => {
            console.log('Error deleting', e)
            dispatch({type: 'DELETE_TODO_ERROR', err: e})
        })
    }
}