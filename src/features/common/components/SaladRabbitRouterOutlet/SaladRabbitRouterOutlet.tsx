import * as React from 'react'
import Styles from './styles'
import { Route, withRouter } from 'react-router-dom'
import { saladRabbitRoutesConfig } from 'config/routeConfig'
interface Props {

}

export default class SaladRabbitRouterOutlet extends React.Component<Props, {}> {
  static displayName = 'SaladRabbitRouterOutlet'

  render () {

    return (
      <Styles className="SaladRabbitRouterOutlet">
        SaladRabbit Router Outlet
        {
          saladRabbitRoutesConfig.map(({ meta, path, component }) =>
            <Route {...meta} path={path} key={path} component={component} />)
        }
      </Styles>
    )
  }
}
