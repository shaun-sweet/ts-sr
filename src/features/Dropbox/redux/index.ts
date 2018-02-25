import { combineReducers } from 'redux'
import dropboxAccountReducer from './actions'
export * from './types'
import { DropboxAccount } from './types'

export interface DropboxState extends DropboxAccount {}
export default dropboxAccountReducer
