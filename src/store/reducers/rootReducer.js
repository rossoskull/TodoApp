import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

// Import other reducers
import todoReducer from './todoReducer'
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    todo: todoReducer,
    user: userReducer,
    firestore: firestoreReducer
}) 