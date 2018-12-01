import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

// Import other reducers
import todoReducer from './todoReducer'
import { userReducer } from './userReducer'
import { signupReducer } from './signupReducer'

export const rootReducer = combineReducers({
    todo: todoReducer,
    user: userReducer,
    signup: signupReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
}) 