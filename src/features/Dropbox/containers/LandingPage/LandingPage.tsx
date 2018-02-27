import * as React from 'react'
import { Dropbox } from 'dropbox'
import Styles from './styles'
import { Button } from 'antd'
import { RootState } from 'config/rootReducer'
import { isDropboxAuthed } from 'features/Dropbox/redux/selectors'
import { ConnectedReduxProps } from 'lib/actionHelper'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { Paths } from 'config/routeConfig'

interface Props extends ConnectedReduxProps<{}> {
  isDropboxAuthed: Boolean
}

class DBoxLandingPage extends React.Component<Props, {}> {
  static displayName = 'DBoxLandingPage'

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
      ? this.props.dispatch(push(Paths.SuccessCallback))
      : false
  }

  render () {
    return (
      <Styles className="dbx-landing">
        <h1 className="title">Salad Rabbit</h1>
        <a href={this.authUrl}>
          <Button type="primary">Login to Dropbox</Button>
        </a>
      </Styles>
    )
  }

}

const mapStateToProps = (state: RootState) => ({ isDropboxAuthed: isDropboxAuthed(state) })

export default connect(mapStateToProps)(DBoxLandingPage)
