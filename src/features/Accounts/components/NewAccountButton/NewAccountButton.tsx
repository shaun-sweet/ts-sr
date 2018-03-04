import * as React from 'react'
import Styles from './styles'
import { Icon, Popover, Form, Input, Button, Checkbox } from 'antd'
import NewAccountForm from 'features/Accounts/components/NewAccountForm'
import { Account } from 'types'
interface Props {
  handleVisibleChange: (visible: boolean) => void
  visible: boolean, // antd show/hide prop
  labelText: string, // text on button
  icon?: string,
  handleAddNewAccount: (newAccount: Account) => void // callback to add the account
}

export default class NewAccountButton extends React.Component<Props, {}> {
  static displayName = 'NewAccount'

  render () {
    return (
      <Styles className="NewAccount">
        <Popover
          onVisibleChange={this.props.handleVisibleChange}
          visible={this.props.visible}
          placement="bottomLeft"
          title="New Account"
          content={<NewAccountForm handleAddNewAccount={this.props.handleAddNewAccount} />}
          trigger="click"
        >
          <Button type="primary" icon="plus">{this.props.labelText}</Button>
        </Popover>

      </Styles >
    )
  }
}
