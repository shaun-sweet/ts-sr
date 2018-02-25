import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { object, func } from 'prop-types'
import { actions } from '../redux/actions'
import { Spin } from 'antd'
import { push } from 'react-router-redux'
import { ConnectedReduxProps } from '~lib/actionHelper'
import { DropboxAccount } from 'features/Dropbox/redux'
import { RootState } from 'config/rootReducer'

interface Props extends ConnectedReduxProps<{}> {}
class SuccessCallback extends React.Component<Props,{}> {

  componentWillMount () {
    // eslint-disable-next-line
    const urlParams = new URLSearchParams(window.location.hash.slice(1)) // theres a hash instead of a ? so slice removes it
    const accessToken = urlParams.get('access_token')
    const uid = urlParams.get('uid')
    const accountId = urlParams.get('account_id')
    const dbxAccount: DropboxAccount = {
      accessToken,
      uid,
      accountId
    }
    const { saveDbxAccount } = actions
    this.props.dispatch(saveDbxAccount(dbxAccount))
  }

  componentDidMount () {
    setTimeout(() => {
      this.props.dispatch(push('/sr'))
    }, 4000)
  }

  render () {
    return (
      <div className="login-success">
        <h1 className="title">Salad Rabbit</h1>
        <Spin
          tip="Loading your treasures"
          size="large"
          wrapperClassName="login-success"
        />
      </div>
    )
  }
}

const mapStateToProps = (state: RootState, ownProps: Props) => ({})
export default connect(mapStateToProps, null)(SuccessCallback)
