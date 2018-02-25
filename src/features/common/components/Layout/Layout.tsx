import * as React from 'react'
import {
  Route
} from 'react-router-dom'
import CompStyles from './styles'
import { DBoxLandingPage, SuccessCallback } from '../../../Dropbox/pages'
import SaladRabbitAuthedAppContainer from '~features/common/pages/SaladRabbitAuthedAppContainerPage'

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
            yay
            <Route exact path="/" component={DBoxLandingPage} />
            <Route path="/auth" component={SuccessCallback} />
            <Route path="/sr" component={SaladRabbitAuthedAppContainer} />
          </main>
        </div>
        <footer>
          This is a footer
      </footer>
      </CompStyles>
    )
  }
}
