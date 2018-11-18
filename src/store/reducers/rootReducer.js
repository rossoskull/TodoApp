import { combineReducers } from 'redux'

// Import other reducers
import todoReducer from './todoReducer'
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    todo: todoReducer,
    user: userReducer
}) 