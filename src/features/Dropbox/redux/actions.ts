import { createAction, ActionsUnion } from '../../../lib/actionHelper'
import { DropboxAccount } from './types'
const SAVE_DBX_ACCOUNT = '[dropbox] SAVE_DBX_ACCOUNT'

export const saveDbxAccount = (dbxAccnt: DropboxAccount) => ({ type: SAVE_DBX_ACCOUNT as typeof SAVE_DBX_ACCOUNT, payload: dbxAccnt })
const actions = {
  saveDbxAccount
}
export type SaveDbxAccountAction = ReturnType<typeof saveDbxAccount>

// export type Actions = ActionsUnion<typeof actions>

export default function reducer (state = initialState(), action) {
  switch (action.type) {
    case SAVE_DBX_ACCOUNT:
      return action.payload
    default: return state
  }
}

function initialState () {
  return {

  }
}
