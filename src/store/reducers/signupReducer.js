const initState = {
    authError: null
}

export const signupReducer = (state = initState, action) => {
    
    switch(action.type) {
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null,
                loaded: true
            }

        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.err,
                loaded: false
            }

        case 'RESET_SIGNUP_LOADSTATE':
            return {
                ...state,
                loaded: null
            }
        
        default:
            return state
    }   
}