import dropbox from '../features/Dropbox/redux'
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
const reducerMap = {
  router: routerReducer,
  dropbox
}

export default combineReducers(reducerMap)
