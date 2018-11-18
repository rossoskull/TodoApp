export const loginUser = dispatch => {
    return (dispatch, user, { getFirebase, getFirestore }) => {

        dispatch({type: 'LOGIN', user})
    }
}