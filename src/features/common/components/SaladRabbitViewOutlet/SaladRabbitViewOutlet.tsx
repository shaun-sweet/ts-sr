import * as React from 'react'
import CompStyles from './styles'

interface Props {

}
interface State {

}

export default class SaladRabbitViewOutlet extends React.Component<Props, State> {
  static displayName = 'SaladRabbitViewOutlet'

  render () {
    return (
      <CompStyles className="SaladRabbitViewOutlet">
        SaladRabbitViewOutlet
      </CompStyles>
    )
  }
}
