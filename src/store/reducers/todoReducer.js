const initState = {
    todos: [
        {id: 1, title: 'First Todo', author: 'Jay Mistry', body: 'This is the first todo.', status: 0},
        {id: 1, title: 'Second Todo', author: 'Jay Mistry', body: 'Second Todo this is!', status: -1},
        {id: 1, title: 'Third Todo', author: 'Jay Mistry', body: 'This is the third todododo.', status: 1},   
    ]
}

const todoReducer = (state = initState, action) => {
    // Handle different actions
    switch(action.type) {
        case 'CREATE_TODO':
            console.log('Created', state)
            return state
        case 'CREATE_TODO_ERROR':
            console.log('Error')
            return state
        case 'DELETE_TODO':
            console.log('Created', state)
            return state
        case 'DELETE_TODO_ERROR':
            console.log('Error')
            return state
        default:
            return state
    }
    
}

export default todoReducer