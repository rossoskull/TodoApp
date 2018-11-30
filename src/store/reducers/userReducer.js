const initState = {
    email: '',
    password: ''
}

export const userReducer = (state = initState, action) => {
    
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                authError: null
            }

        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: action.e
            }

        case 'LOGOUT_USER':
            return {
                ...state,
                authError: null
            }

        case 'LOGOUT_USER_ERROR':
            return {
                ...state,
                authError: action.e
            }
        
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.err
            }
        
        default:
            break
    }
    
    return state
}