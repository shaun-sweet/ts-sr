import * as React from 'react'
import { push } from 'react-router-redux'
import { ConnectedReduxProps } from 'lib/actionHelper'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import CompStyles from './styles'
import { RootState } from 'config/rootReducer'
import { v1 } from 'uuid/interfaces'
interface Props extends ConnectedReduxProps<{}> {}
class AccountsView extends React.Component<Props & RouteComponentProps<{}>, {}> {
  static displayName = 'AccountsView'

  render () {

    return (
      <CompStyles className="AccountsView">
        AccountsView
      </CompStyles >
    )
  }

}

const mapStateToProps = (state: RootState) => ({ })

export default connect(mapStateToProps)(AccountsView)
