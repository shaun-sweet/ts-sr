import * as React from 'react'
import Styles from './styles'
import { Icon, Popover, Form, Input, Button, Checkbox } from 'antd'
import NewAccountForm from '~components/NewAccountForm'
interface Props {
  labelText: string, // text on button
  icon?: string,
  handleSubmit: () => void // callback to add the account
}

export default class NewAccountButton extends React.Component<Props, {}> {
  static displayName = 'NewAccount'

  render () {
    return (
      <Styles className="NewAccount">
        <Popover placement="bottomLeft" title="Add Account" content={<NewAccountForm />} trigger="click">
          <Button type="primary" icon="plus">{this.props.labelText}</Button>
        </Popover>

      </Styles >
    )
  }
}
