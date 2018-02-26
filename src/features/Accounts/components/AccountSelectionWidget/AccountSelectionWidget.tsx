import * as React from 'react'
import { ConnectedReduxProps } from 'lib/actionHelper'
import { connect } from 'react-redux'
import CompStyles from './styles'

interface Props extends ConnectedReduxProps<{}> {

}
interface State {

}

class AccountSelectionWidget extends React.Component<Props, State> {
  static displayName = 'AccountSelectionWidget'

  render () {
    return (
      <CompStyles className="AccountSelectionWidget">
      </CompStyles >
    )
  }

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(AccountSelectionWidget)
