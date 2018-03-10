import { DropboxWrapper } from 'lib/Dropbox'
import { getDbxClient } from '../../Dropbox/redux/selectors'
import { actions } from '../../Accounts/redux/actions'

export const bootstrapDropboxEnvironment = () => (dispatch, getState) => {
  const dbx = getDbxClient(getState())
  const { populateAccounts } = actions
  dbx.bootstrapEnvironment((accounts) => dispatch(populateAccounts(accounts)))

}
