export const createTodo = todo => {
    return (dispatch, getState, { getFirestore }) => {
        if ( todo.title === null || todo.title === '' ) {
            dispatch({type: 'CREATE_TODO_ERROR', e: 'Title cannot be empty.'})
        } else if ( todo.body === null || todo.body === '' ) {
            dispatch({type: 'CREATE_TODO_ERROR', e: 'Body cannot be empty.'})
        } else {
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
}

export const resetCreateTodoLoadState = () => {
    return (dispatch, getState) => {
        dispatch({type: 'CREATE_TODO_RESET_LOADSTATE'})
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

export const updateTodo = todo => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('todos').doc(todo.id).update({
            status: todo.status
        }).then(() => {
            dispatch({type: 'UPDATE_TODO_SUCCESS'})
        }).catch(e => {
            dispatch({type: 'UPDATE_TODO_ERROR', e})
        })
    }
}