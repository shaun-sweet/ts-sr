import * as React from 'react'
import Styles from './styles'
import { Input, Form, Icon, Select, Checkbox, Button, Radio } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'

const Option = Select.Option

function handleChange (value) {
  console.log(`selected ${value}`)
}

const RadioGroup = Radio.Group
const FormItem = Form.Item
interface OwnProps extends FormComponentProps {handleSubmit: any }
const NewAccountForm: React.StatelessComponent<OwnProps> = (props) => {
  const { getFieldDecorator } = props.form
  console.log(props.form.getFieldsValue())

  return (
    <Styles className="NewAccountForm">
      <Form onSubmit={this.props.handleSubmit} layout="vertical" className="login-form">
        <FormItem label="Account Name">
          {getFieldDecorator('accountName', {
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
          {getFieldDecorator('account', {
            valuePropName: 'checked',
            initialValue: 'checking'
          })(
            <RadioGroup>
              <Radio value={'checking'}>Checking</Radio>
              <Radio value={'saving'}>Savings</Radio>
            </RadioGroup>
          )}
          <Button onClick={this.props.handleSubmit} type="primary" htmlType="submit" className="save-button">
            Add New Account
          </Button>
        </FormItem>
      </Form>
    </Styles>
  )
}

NewAccountForm.displayName = 'NewAccountForm'

export default Form.create()(NewAccountForm)
