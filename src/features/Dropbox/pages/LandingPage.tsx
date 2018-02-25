import * as React from 'react'
import { Dropbox } from 'dropbox'
import { Button } from 'antd'

class DBoxLandingPage extends React.Component {
  dbx: any
  authUrl: string
  constructor () {
    super()
    const { CALLBACK_DOMAIN, DROPBOX_CLIENT_ID } = process.env
    this.dbx = new Dropbox({ clientId: DROPBOX_CLIENT_ID })
    this.authUrl = this.dbx.getAuthenticationUrl(`${CALLBACK_DOMAIN}/auth`)

  }

  render () {
    return (
      <div className="dbx-landing">
        <h1 className="title">Salad Rabbit</h1>
        <a href={this.authUrl}>
          <Button type="primary">Login to Dropbox</Button>
        </a>
      </div>
    )
  }
}

export default DBoxLandingPage
