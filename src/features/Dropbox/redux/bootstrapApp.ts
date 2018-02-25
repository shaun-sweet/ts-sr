const SAVE_DBX_ACCOUNT = 'sr/dropbox/SAVE_DBX_ACCOUNT'
interface DropboxAction {
  type: string,
  payload: any
}

export default function reducer (state = initialState(), action: DropboxAction) {
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

export const saveDbxAccount = (dbxAccnt) => ({
  type: SAVE_DBX_ACCOUNT,
  payload: dbxAccnt
})

export const bootstrapApp = (urlParams) => (dispatch, getState) => {
  const accessToken = urlParams.get('access_token')
  const uid = urlParams.get('uid')
  const accountId = urlParams.get('account_id')
  const dbxAccount = {
    accessToken,
    uid,
    accountId
  }
  dispatch(saveDbxAccount(dbxAccount))
}
