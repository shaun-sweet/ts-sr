import * as React from 'react'
import CompStyles from './styles'
import SaladRabbitViewOutlet from '~components/SaladRabbitViewOutlet'
import SideBar from '~components/SideBar'
interface Props {

}
interface State {

}

export default class SaladRabbitAuthedAppContainer extends React.Component<Props, State> {
  static displayName = 'Home'

  render () {
    return (
      <CompStyles className="Home">
        <SideBar>Side Bar!!</SideBar>
        <SaladRabbitViewOutlet>Yay</SaladRabbitViewOutlet>
      </CompStyles>
    )
  }
}
