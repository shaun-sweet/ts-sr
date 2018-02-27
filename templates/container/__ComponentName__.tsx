import * as React from 'react'
// import propTypes from 'prop-types'
// import { push } from 'react-router-redux'
import { ConnectedReduxProps } from 'lib/actionHelper'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import Styles from './styles'
import { RootState } from 'config/rootReducer'

interface OwnProps extends ConnectedReduxProps<{}> {

}
class __ComponentName__ extends React.Component<OwnProps, {}> {
  static displayName = '__ComponentName__'

  render () {
    return (
      <Styles className="__ComponentName__">
        __ComponentName__
      </Styles >
    )
  }

}

const mapStateToProps = (state: RootState) => ({})

export default connect(mapStateToProps)(__ComponentName__)
