import * as React from 'react'
import {
  Route
} from 'react-router-dom'
import CompStyles from './styles'
import SuccessCallback from 'features/Dropbox/containers/SuccessCallback'
import DBoxLandingPage from 'features/Dropbox/containers/LandingPage'
import SaladRabbit from 'features/common/containers/SaladRabbit'
import { Paths, routeConfig } from 'config/routeConfig'

/** Main page layout */
export default class Layout extends React.Component {

  render () {
    return (
      <CompStyles className="root-layout">
        <div className="container">
          <header>
            <nav />
          </header>
          <main>
            {
              routeConfig.map(({ meta, path, component }) =>
                <Route {...meta} path={path} component={component} />)
            }
          </main>
        </div>
        <footer>
          This is a footer
      </footer>
      </CompStyles>
    )
  }
}
