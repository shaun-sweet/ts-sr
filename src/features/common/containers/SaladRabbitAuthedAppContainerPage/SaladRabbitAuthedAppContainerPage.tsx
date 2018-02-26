import * as React from 'react'
import CompStyles from './styles'
import SaladRabbit from '~components/SaladRabbit'
import SideBar from '~features/common/containers/SideBar'
interface Props {

}
export default class SaladRabbitAuthedAppContainer extends React.Component<Props, {}> {
  static displayName = 'Home'

  render () {
    return (
      <CompStyles className="Home">
        <SideBar />
        <SaladRabbit />
      </CompStyles>
    )
  }
}
