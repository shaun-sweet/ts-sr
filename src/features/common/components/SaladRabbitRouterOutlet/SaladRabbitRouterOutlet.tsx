import * as React from 'react'
import CompStyles from './styles'

interface Props {

}

export default class SaladRabbitRouterOutlet extends React.Component<Props, {}> {
  static displayName = 'SaladRabbitRouterOutlet'

  render () {
    return (
      <CompStyles className="SaladRabbitRouterOutlet">
        SaladRabbit Router Outlet
      </CompStyles>
    )
  }
}
