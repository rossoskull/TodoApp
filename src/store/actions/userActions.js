export const loginUser = user => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        console.log(user.email, user.password)
        firebase.auth().signInWithEmailAndPassword(
            user.email,
            user.password
        ).then(() => {
            console.log("Login")
            dispatch({type: 'LOGIN'})
        }).catch(e => {
            console.log("Login Error")
            dispatch({type: 'LOGIN_ERROR', e})
        })
    }
}