import * as React from 'react'
import CompStyles from './styles'

interface Props {

}
interface State {

}

export default class SaladRabbit extends React.Component<Props, State> {
  static displayName = 'SaladRabbit'

  render () {
    return (
      <CompStyles className="SaladRabbit">
        SaladRabbit
      </CompStyles>
    )
  }
}
