export const loginUser = user => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        console.log(user.email, user.password)
        firebase.auth().signInWithEmailAndPassword(
            user.email,
            user.password
        ).then(() => {
            dispatch({type: 'LOGIN'})
        }).catch(e => {
            dispatch({type: 'LOGIN_ERROR', e})
        })
    }
}

export const logoutUser = () => {
    return (dispatch, getState, {getFirebase}) => {
        console.log('logout')
        const firebase = getFirebase()
        firebase.logout()
        .then(() => {
            dispatch({type: 'LOGOUT_USER'})
        })
        .catch(e => {
            dispatch({type: 'LOGOUT_USER_ERROR', e})
        })
    }
}