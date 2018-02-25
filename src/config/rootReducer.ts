import dropbox, { DropboxState } from '../features/Dropbox/redux'
import { routerReducer, RouterState } from 'react-router-redux'
import { combineReducers } from 'redux'

export interface RootState {
  router: RouterState,
  dropbox: DropboxState
}

export default combineReducers<RootState>({
  router: routerReducer,
  dropbox
})
