import * as React from 'react'
import {
  Route
} from 'react-router-dom'
import CompStyles from './styles'
import { DBoxLandingPage, SuccessCallback } from '../../../Dropbox/pages'
import SaladRabbitAuthedAppContainer from '~features/common/pages/SaladRabbitAuthedAppContainerPage'
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
            <Route path={Routes.SaladRabbitAuthedAppContainerPage} component={SaladRabbitAuthedAppContainer} />
          </main>
        </div>
        <footer>
          This is a footer
      </footer>
      </CompStyles>
    )
  }
}
