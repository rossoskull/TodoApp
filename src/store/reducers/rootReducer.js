import { combineReducers } from 'redux'

// Import other reducers
import todoReducer from './todoReducer'

export const rootReducer = combineReducers({
    todo: todoReducer
}) 