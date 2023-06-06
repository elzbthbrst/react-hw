import { combineReducers } from 'redux'
import contactsReducer from './contactsReducer'
import todoReducer from './todoReducer'

export const rootReducer = combineReducers({
    contact: contactsReducer,
    todo: todoReducer
  })