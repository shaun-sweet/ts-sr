import * as React from 'react'
import { push } from 'react-router-redux'
import { ConnectedReduxProps } from 'lib/actionHelper'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import Styles from './styles'
import { RootState } from 'config/rootReducer'
import { v1 } from 'uuid/interfaces'
interface Props extends ConnectedReduxProps<{}> {}
class AccountsView extends React.Component<Props & RouteComponentProps<{}>, {}> {
  static displayName = 'AccountsView'

  render () {

    return (
      <Styles className="AccountsView">
        AccountsView
      </Styles >
    )
  }

}

const mapStateToProps = (state: RootState) => ({ })

export default connect(mapStateToProps)(AccountsView)
