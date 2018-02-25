import * as React from 'react'
import { DBoxLandingPage, SuccessCallback } from '../../../features/Dropbox/pages'
import {
  Route
} from 'react-router-dom'
import CompStyles from './styles'
// import Home from '@common/pages/Home'

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
            {/* <Route path="/sr" component={Home} /> */}
          </main>
        </div>
        <footer>
          This is a footer
      </footer>
      </CompStyles>
    )
  }
}
