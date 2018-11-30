const initState = {
    email: '',
    password: ''
}

export const userReducer = (state = initState, action) => {
    
    switch(action.type) {
        case 'LOGIN':
            console.log('LOGIN SUCCESSFUL')
            return {
                ...state,
                authError: null
            }

        case 'LOGIN_ERROR':
            console.log('LOGIN_ERROR')
            return {
                ...state,
                authError: action.e
            }

        case 'LOGOUT_USER':
            console.log('LOGOUT SUCCESSFUL')
            return {
                ...state,
                authError: null
            }

        case 'LOGOUT_USER_ERROR':
            console.log('LOGOUT ERROR')
            return {
                ...state,
                authError: action.e
            }
        
        case 'SIGNUP_SUCCESS':
            console.log('SIGNUP SUCCESSFUL')
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('SIGNUP ERROR')
            return {
                ...state,
                authError: action.err
            }
        
        default:
            break
    }
    
    return state
}