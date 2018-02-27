import * as React from 'react'
import { Route } from 'react-router-dom'
import Styles from './styles'
import SuccessCallback from 'features/Dropbox/containers/SuccessCallback'
import DBoxLandingPage from 'features/Dropbox/containers/LandingPage'
import SaladRabbit from 'features/common/containers/SaladRabbit'
import { rootRoutesConfig } from 'config/routeConfig'

export default class Layout extends React.Component {

  render () {
    return (
      <Styles className="root-layout">
        <div className="container">
          <header>
            <nav />
          </header>
          <main>
            {
              rootRoutesConfig.map(({ meta, path, component }) =>
                <Route {...meta} path={path} key={path} component={component} />)
            }
          </main>
        </div>
        <footer>
          This is a footer
      </footer>
      </Styles>
    )
  }
}
