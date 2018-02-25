import * as React from 'react'
import CompStyles from './styles'

interface Props {

}
interface State {

}

export default class SideBar extends React.Component<Props, State> {
  static displayName = 'SideBar'

  render () {
    return (
      <CompStyles className="SideBar">
        SideBar
      </CompStyles>
    )
  }
}
