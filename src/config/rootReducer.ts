import { DropboxState, dropboxReducer as dropbox } from '../features/Dropbox/redux'
import { routerReducer, RouterState } from 'react-router-redux'
import { Entities } from 'types'
import { combineReducers } from 'redux'
import accounts from 'features/Accounts/redux/reducer'

export interface RootState {
  router: RouterState,
  dropbox: DropboxState,
  entities: Entities
}
const entities = combineReducers({
  accounts
})
export default combineReducers<RootState>({
  router: routerReducer,
  dropbox,
  entities
})
