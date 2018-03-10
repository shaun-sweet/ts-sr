import { createAction, ActionsUnion } from 'lib/actionHelper'
import { Account, Entities } from 'types'
type AccountsEntity = Entities['accounts']

export const SAVE_SALAD_RABBIT_ACCOUNT = '[accounts] SAVE_SALAD_RABBIT_ACCOUNT'
export const CLOSE_SALAD_RABBIT_ACCOUNT = '[accounts] CLOSE_SALAD_RABBIT_ACCOUNT'
export const OPEN_SALAD_RABBIT_ACCOUNT = '[accounts] OPEN_SALAD_RABBIT_ACCOUNT'
export const POPULATE_ACCOUNTS_FROM_DROPBOX = '[accounts] POPULATE_ACCOUNTS_FROM_DROPBOX'

export const actions = {
  populateAccounts: (accounts: AccountsEntity) => createAction(POPULATE_ACCOUNTS_FROM_DROPBOX, accounts),
  saveAccount: (accnt: Account) => createAction(SAVE_SALAD_RABBIT_ACCOUNT, accnt),
  closeAccount: (accntUid: Account['uid']) => createAction(CLOSE_SALAD_RABBIT_ACCOUNT, accntUid),
  openAccount: (accntUid: Account['uid']) => createAction(OPEN_SALAD_RABBIT_ACCOUNT, accntUid)
}

export type Actions = ActionsUnion<typeof actions>
