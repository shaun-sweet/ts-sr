import * as React from 'react'
import CompStyles from './styles'
import SaladRabbitViewOutlet from '~components/SaladRabbitViewOutlet'
import SideBar from '~features/common/containers/SideBar'
interface Props {

}
interface State {

}

export default class SaladRabbitAuthedAppContainer extends React.Component<Props, State> {
  static displayName = 'Home'

  render () {
    return (
      <CompStyles className="Home">
        <SideBar />
        <SaladRabbitViewOutlet />
      </CompStyles>
    )
  }
}
