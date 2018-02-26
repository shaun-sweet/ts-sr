import { createAction, ActionsUnion } from 'lib/actionHelper'
import { SaladRabbitTypes } from 'types'
type Account = SaladRabbitTypes.Account

export const SAVE_SALAD_RABBIT_ACCOUNT = '[accounts] SAVE_SALAD_RABBIT_ACCOUNT'
export const CLOSE_SALAD_RABBIT_ACCOUNT = '[accounts] CLOSE_SALAD_RABBIT_ACCOUNT'
export const OPEN_SALAD_RABBIT_ACCOUNT = '[accounts] OPEN_SALAD_RABBIT_ACCOUNT'

export const actions = {
  saveAccount: (accnt: Account) => createAction(SAVE_SALAD_RABBIT_ACCOUNT, accnt),
  closeAccount: (accntUid: Account['uid']) => createAction(CLOSE_SALAD_RABBIT_ACCOUNT, accntUid),
  openAccount: (accntUid: Account['uid']) => createAction(OPEN_SALAD_RABBIT_ACCOUNT, accntUid)
}

export type Actions = ActionsUnion<typeof actions>
