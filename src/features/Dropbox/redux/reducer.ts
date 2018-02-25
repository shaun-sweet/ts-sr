import * as fromActions from './actions'

export interface DropboxState {
  accessToken: string, // dropbox API token
  uid: string, // dropbox users uid
  accountId: string // dropbox users account ID
}

const initialState: DropboxState = {
  accessToken: '',
  accountId: '',
  uid: ''
}

export default function reducer (state = initialState, action: fromActions.Actions): DropboxState {
  switch (action.type) {
    case fromActions.SAVE_DBX_ACCOUNT:
      return action.payload
    default: return state
  }
}
