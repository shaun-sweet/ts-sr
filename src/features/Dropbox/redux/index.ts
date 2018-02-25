import { combineReducers } from 'redux'
import dropboxAccountReducer from './bootstrapApp'

const reducers = {
  account: dropboxAccountReducer
}

export default combineReducers(reducers)
