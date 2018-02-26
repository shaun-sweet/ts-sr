import * as React from 'react'
import {
  Route
} from 'react-router-dom'
import CompStyles from './styles'
import SuccessCallback from '~features/Dropbox/containers/SuccessCallback'
import DBoxLandingPage from '~features/Dropbox/containers/LandingPage'
import SaladRabbit from '~features/common/containers/SaladRabbit'
import { Routes } from 'config/routeConstants'

/** Main page layout */
export default class Layout extends React.Component {

  render () {
    return (
      <CompStyles className="root">
        <div className="container">
          <header>
            <nav />
          </header>
          <main>
            <Route exact path={Routes.Root} component={DBoxLandingPage} />
            <Route path={Routes.SuccessCallback} component={SuccessCallback} />
            <Route path={Routes.SaladRabbit} component={SaladRabbit} />
          </main>
        </div>
        <footer>
          This is a footer
      </footer>
      </CompStyles>
    )
  }
}
