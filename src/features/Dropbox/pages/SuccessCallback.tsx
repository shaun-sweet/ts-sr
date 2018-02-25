import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { object, func } from 'prop-types'
import { saveDbxAccount, SaveDbxAccountAction } from '../redux/actions'
import { Spin } from 'antd'
import { push } from 'react-router-redux'

interface Props {
  saveDbxAccount: SaveDbxAccountAction,
  redirect: any
}
class SuccessCallback extends React.Component<Props,{}> {

  componentWillMount () {
    const { saveDbxAccount } = this.props
    // eslint-disable-next-line
    const urlParams = new URLSearchParams(window.location.hash.slice(1)) // theres a hash instead of a ? so slice removes it
    const accessToken = urlParams.get('access_token')
    const uid = urlParams.get('uid')
    const accountId = urlParams.get('account_id')
    const dbxAccount = {
      accessToken,
      uid,
      accountId
    }

    saveDbxAccount(dbxAccount)
  }

  componentDidMount () {
    setTimeout(() => {
      this.props.redirect('/sr')
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

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ saveDbxAccount }, dispatch),
    redirect (url) {
      return dispatch(push(url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessCallback)
