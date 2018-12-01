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
            return {
                ...state,
                todoError: null,
                loaded: true
            }

        case 'CREATE_TODO_ERROR':
            return {
                ...state,
                todoError: action.e,
                loaded: false
            }

        case 'CREATE_TODO_RESET_LOADSTATE':
            return {
                ...state,
                loaded: null
            }

        case 'DELETE_TODO':
            return {
                ...state,
                todoError: null
            }

        case 'DELETE_TODO_ERROR':
            return {
                ...state,
                todoError: action.e
            }

        case 'UPDATE_TODO_SUCCESS':
            return {
                ...state,
                todoError: null
            }

        case 'UPDATE_TODO_ERROR':
            return {
                ...state,
                todoError: action.e
            }

        default:
            return state
    }
    
}

export default todoReducer