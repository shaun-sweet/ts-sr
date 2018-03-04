import * as React from 'react'
import Styles from './styles'
import { Input, Form, Icon, Select, Checkbox, Button, Radio } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import { Account } from 'types'
const moment = require('moment')
const uuidv1 = require('uuid/v1')

const Option = Select.Option

function makeAccount (formValues): Account {
  const { name, balance, type } = formValues
  return {
    uid: uuidv1(),
    name,
    balance,
    type,
    isClosed: false,
    createdAt: moment().format()
  }
}

const RadioGroup = Radio.Group
const FormItem = Form.Item
interface OwnProps extends FormComponentProps {
  handleAddNewAccount: (newAccount: Account) => void
}
const NewAccountForm: React.StatelessComponent<OwnProps> = (props) => {
  const { getFieldDecorator } = props.form

  return (
    <Styles className="NewAccountForm">
      <Form layout="vertical" className="login-form">
        <FormItem label="Account Name">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Account name required!' }]
          })(
            <Input prefix={<Icon type="credit-card" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="e.g. 'Primary Checking'" />
          )}
        </FormItem>
        <FormItem label="Balance">
          {getFieldDecorator('balance', {
            initialValue: '0.00',
            rules: [{ required: true, message: 'Please input your balance!' }]
          })(
            <Input addonBefore="$" placeholder="e.g. 4500.00" />
          )}
        </FormItem>
        <br />
        <FormItem>
          {getFieldDecorator('type', {
            valuePropName: 'checked',
            initialValue: 'checking'
          })(
            <RadioGroup>
              <Radio value={'checking'}>Checking</Radio>
              <Radio value={'saving'}>Savings</Radio>
            </RadioGroup>
          )}
          <Button onClick={(e) => props.handleAddNewAccount(makeAccount(props.form.getFieldsValue()))} type="primary" htmlType="submit" className="save-button">
            Add New Account
          </Button>
        </FormItem>
      </Form>
    </Styles>
  )
}

NewAccountForm.displayName = 'NewAccountForm'

export default Form.create<OwnProps>()(NewAccountForm)
