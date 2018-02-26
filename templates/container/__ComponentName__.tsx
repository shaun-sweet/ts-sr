import * as React from 'react'
// import propTypes from 'prop-types'
// import { push } from 'react-router-redux'
import { ConnectedReduxProps } from '~lib/actionHelper'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import CompStyles from './styles'
import { RootState } from '~config/rootReducer'

interface Props extends ConnectedReduxProps<{}> {

}
class __ComponentName__ extends React.Component<Props, {}> {
  static displayName = '__ComponentName__'

  render () {
    return (
      <CompStyles className="__ComponentName__">
        __ComponentName__
      </CompStyles >
    )
  }

}

const mapStateToProps = state: RootState => ({  })

export default connect(mapStateToProps)(__ComponentName__)
