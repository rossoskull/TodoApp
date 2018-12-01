const initState = {
    email: '',
    password: ''
}

export const userReducer = (state = initState, action) => {
    
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                authError: null,
                loaded: true
            }

        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: action.e,
                loaded: false
            }

        case 'LOGOUT_USER':
            return {
                ...state,
                authError: null
            }

        case 'RESET_LOGIN_LOADSTATE':
            return {
                ...state,
                loaded: null
            }

        case 'LOGOUT_USER_ERROR':
            return {
                ...state,
                authError: action.e
            }

        default:
            return state
    }
}