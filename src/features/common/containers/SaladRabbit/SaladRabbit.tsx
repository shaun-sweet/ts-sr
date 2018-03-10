import * as React from 'react'
import Styles from './styles'
import SaladRabbitRouterOutlet from '~components/SaladRabbitRouterOutlet'
import SideBar from 'features/common/containers/SideBar'
import { ConnectedReduxProps } from 'lib/actionHelper'
import { connect } from 'react-redux'
import { RootState } from 'config/rootReducer'
import { bootstrapDropboxEnvironment } from '../../redux/bootstrapDropboxEnvironment'

interface OwnProps extends ConnectedReduxProps <{}> {}

class SaladRabbit extends React.Component<OwnProps, {}> {
  static displayName = 'Home'

  componentWillMount () {
    const { dispatch } = this.props
    dispatch(bootstrapDropboxEnvironment())
  }

  render () {
    return (
      <Styles className="Home">
        <SideBar />
        <SaladRabbitRouterOutlet />
      </Styles>
    )
  }
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({})
export default connect(mapStateToProps)(SaladRabbit)
