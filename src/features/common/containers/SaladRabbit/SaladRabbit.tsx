import * as React from 'react'
import CompStyles from './styles'
import SaladRabbitRouterOutlet from '~components/SaladRabbitRouterOutlet'
import SideBar from 'features/common/containers/SideBar'
interface Props {

}
export default class SaladRabbit extends React.Component<Props, {}> {
  static displayName = 'Home'

  render () {
    return (
      <CompStyles className="Home">
        <SideBar />
        <SaladRabbitRouterOutlet />
      </CompStyles>
    )
  }
}
