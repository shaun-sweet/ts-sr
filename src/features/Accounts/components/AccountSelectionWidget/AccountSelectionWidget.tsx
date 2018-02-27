import * as React from 'react'
import { ConnectedReduxProps } from 'lib/actionHelper'
import { connect } from 'react-redux'
import Styles from './styles'

interface Props extends ConnectedReduxProps<{}> {

}

class AccountSelectionWidget extends React.Component<Props, {} > {
  static displayName = 'AccountSelectionWidget'

  render () {
    return (
      <Styles className="AccountSelectionWidget">
      </Styles >
    )
  }

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(AccountSelectionWidget)
