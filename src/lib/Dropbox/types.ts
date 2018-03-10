import { Dispatch } from 'react-redux'
import { actions } from 'features/Accounts/redux/actions'
import * as SR from 'types'

const { populateAccounts } = actions

export type getFileJsonDispatchTypes = (payload:
    SR.Entities['accounts']
) => Dispatch<typeof populateAccounts>
