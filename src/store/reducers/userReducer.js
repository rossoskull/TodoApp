const initState = {
    email: '',
    password: ''
}

export const userReducer = (state = initState, action) => {
    
    switch(action.type) {
        case 'LOGIN':
            console.log('LOGIN')
            break
        case 'LOGIN_ERROR':
            console.log('LOGIN_ERROR', action.e)
            break
        default:
            break
    }
    
    return state
}