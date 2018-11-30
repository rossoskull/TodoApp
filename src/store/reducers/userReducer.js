const initState = {
    email: '',
    password: ''
}

export const userReducer = (state = initState, action) => {
    
    switch(action.type) {
        case 'LOGIN':
            console.log('LOGIN SUCCESSFUL')
            return state

        case 'LOGIN_ERROR':
            console.log('LOGIN_ERROR')
            console.log(action.e)
            return {
                ...state,
                authError: action.e
            }

        case 'LOGOUT_USER':
            console.log('LOGOUT SUCCESSFUL')
            return state

        case 'LOGOUT_USER_ERROR':
            console.log('LOGOUT ERROR')
            console.log(action.e)
            return {
                ...state,
                authError: action.e
            }
            
        default:
            break
    }
    
    return state
}