import { createAction, ActionsUnion } from 'lib/actionHelper'
import { DropboxAccount } from './types'

export const SAVE_DBX_ACCOUNT = '[dropbox] SAVE_DBX_ACCOUNT'

export const actions = {
  saveDbxAccount: (dbxAccount: DropboxAccount) => createAction(SAVE_DBX_ACCOUNT, dbxAccount)
}

export type Actions = ActionsUnion<typeof actions>
