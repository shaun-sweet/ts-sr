import * as fromActions from './actions'
import { Entities } from 'types'
type AccountsEntity = Entities['accounts']
type AccountActions = fromActions.Actions
const initialState: AccountsEntity = {}

export default function reducer (state = initialState, action: AccountActions): AccountsEntity {
  switch (action.type) {
    case fromActions.SAVE_SALAD_RABBIT_ACCOUNT:
      return { ...state, [action.payload.uid]: action.payload }
    case fromActions.CLOSE_SALAD_RABBIT_ACCOUNT:
      return { ...state, [action.payload]: { ...state[action.payload], isClosed: true } }
    case fromActions.OPEN_SALAD_RABBIT_ACCOUNT:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          isClosed: false
        }
      }
    default: return state
  }
}
