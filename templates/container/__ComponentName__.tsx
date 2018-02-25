import * as React from 'react'
// import propTypes from 'prop-types'
// import { push } from 'react-router-redux'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import CompStyles from './styles'

interface Props {

}
interface State {

}

class __ComponentName__ extends React.Component<Props, State> {
  static displayName = '__ComponentName__'
  static propTypes = {

  }

  render = () => (
    <CompStyles className="__ComponentName__">
      __ComponentName__
    </CompStyles>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators({ **actionCreatorFunc** }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(__ComponentName__)
