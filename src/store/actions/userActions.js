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

        if ( user.fname === '' || user.fname === null ) {
            dispatch({ type: 'SIGNUP_ERROR', err: {message: 'First name is required.'} })
        } else if ( user.lname === '' || user.lname === null ) {
            dispatch({ type: 'SIGNUP_ERROR', err: {message: 'Last name is required.'} })
        } else {
            const firebase = getFirebase()
            firebase.auth().createUserWithEmailAndPassword(
                user.email,
                user.password
            ).then(res => {
                return getFirestore().collection('users').doc(res.user.uid).set({
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
}

export const resetLoginLoadstate = dispatch => {
    return (dispatch, getState) => {
        dispatch({type: 'RESET_LOGIN_LOADSTATE'})
    }
}

export const resetSignupLoadstate = dispatch => {
    return (dispatch, getState) => {
        dispatch({type: 'RESET_SIGNUP_LOADSTATE'})
    }
}
