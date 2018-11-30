export const loginUser = user => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
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

export const signUp = user => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        firebase.createUser({
            email: user.email,
            password: user.password
        }).then(u => {
            return getFirestore().collection('users').doc(u.user.uid).set({
                fname: user.fname,
                lname: user.lname
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}