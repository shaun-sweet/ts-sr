import * as React from 'react'
import { Dropbox } from 'dropbox'
import { Button } from 'antd'
import { RootState } from 'config/rootReducer'
import { isDropboxAuthed } from '~features/Dropbox/redux/selectors'
import { ConnectedReduxProps } from '~lib/actionHelper'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { Routes } from 'config/routeConstants'

interface Props extends ConnectedReduxProps<{}> {
  isDropboxAuthed: Boolean
}
class DBoxLandingPage extends React.Component<Props, {}> {
  dbx: any
  authUrl: string
  constructor (props) {
    super(props)
    const { CALLBACK_DOMAIN, DROPBOX_CLIENT_ID } = process.env
    this.dbx = new Dropbox({ clientId: DROPBOX_CLIENT_ID })
    this.authUrl = this.dbx.getAuthenticationUrl(`${CALLBACK_DOMAIN}/auth`)
  }

  componentDidMount () {
    return this.props.isDropboxAuthed
      ? this.props.dispatch(push(Routes.SuccessCallback))
      : false
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

const mapStateToProps = (state: RootState) => ({ isDropboxAuthed: isDropboxAuthed(state) })

export default connect(mapStateToProps)(DBoxLandingPage)
