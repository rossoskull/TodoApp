const initState = {
    email: '',
    password: ''
}

export const userReducer = (state = initState, action) => {
    
    switch(action.type) {
        case 'LOGIN':
            console.log('LOGIN', state)
            break
        default:
            break
    }
    
    return state
}