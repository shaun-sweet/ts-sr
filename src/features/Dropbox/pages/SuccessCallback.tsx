import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { object, func } from 'prop-types'
import { bootstrapApp, saveDbxAccount } from '../redux/bootstrapApp'
import { Spin } from 'antd'
import { push } from 'react-router-redux'

class SuccessCallback extends React.Component<{actions: any, redirect: any},{}> {
  static propTypes = {
    actions: object,
    redirect: func.isRequired
  }

  componentWillMount () {
    const { bootstrapApp } = this.props.actions
    // eslint-disable-next-line
    const urlParams = new URLSearchParams(window.location.hash.slice(1)) // theres a hash instead of a ? so slice removes it
    bootstrapApp(urlParams)
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
    actions: bindActionCreators({ bootstrapApp }, dispatch),
    redirect (url) {
      return dispatch(push(url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessCallback)
