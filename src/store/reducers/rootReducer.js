import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

// Import other reducers
import todoReducer from './todoReducer'
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    todo: todoReducer,
    user: userReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
}) 