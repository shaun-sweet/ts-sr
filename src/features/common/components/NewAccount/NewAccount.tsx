import * as React from 'react'
import Styles from './styles'
import { Icon, Popover, Form, Input, Button, Checkbox } from 'antd'
interface Props {
  labelText: string, // text on button
  icon?: string,
  handleSubmit: Function
}

export default class NewAccount extends React.Component<Props, {}> {
  static displayName = 'NewAccount'

  render () {
    return (
      <Styles className="NewAccount">
        <Popover placement="bottomLeft" title="Add Account" content={'content'} trigger="click">
          <Button type="primary" icon="plus">{this.props.labelText}</Button>
        </Popover>

      </Styles>
    )
  }
}
