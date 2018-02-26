import * as React from 'react'
// import propTypes from 'prop-types'
// import { push } from 'react-router-redux'
import { ConnectedReduxProps } from 'lib/actionHelper'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import CompStyles from './styles'

interface Props extends ConnectedReduxProps<{}> {

}
interface State {

}

class AccountSelectionWidget extends React.Component<Props, State> {
  static displayName = 'AccountSelectionWidget'

  render () {
    return (
      <CompStyles className = "AccountSelectionWidget">
        AccountSelectionWidget
      </CompStyles >
    )
  }

}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators({ **actionCreatorFunc** }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSelectionWidget)
