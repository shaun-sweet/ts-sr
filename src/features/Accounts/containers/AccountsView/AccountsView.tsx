import * as React from 'react'
// import propTypes from 'prop-types'
// import { push } from 'react-router-redux'
import { ConnectedReduxProps } from 'lib/actionHelper'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import CompStyles from './styles'
import { RootState } from 'config/rootReducer'

interface Props extends ConnectedReduxProps<{}> {

}
class AccountsView extends React.Component<Props, {}> {
  static displayName = 'AccountsView'

  render () {
    return (
      <CompStyles className="AccountsView">
        AccountsView
      </CompStyles >
    )
  }

}

const mapStateToProps = (state: RootState) => ({})

export default connect(mapStateToProps)(AccountsView)
