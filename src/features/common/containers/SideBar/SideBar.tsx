import * as React from 'react'
import Styles from './styles'
import { Menu, Icon, Popover, Form, Input, Button, Checkbox } from 'antd'
import NewAccountButton from '~components/NewAccountButton'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const FormItem = Form.Item
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
}
interface Props {

}
interface State {

}

export default class SideBar extends React.Component<Props, State> {
  static displayName = 'SideBar'

  handleClick = (e) => {
    console.log('click ', e)
  }

  render () {
    return (
      <Styles className="SideBar">
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <Menu.Item key="1"><span><Icon type="wallet" /><span>Budget</span></span></Menu.Item>
          <SubMenu key="sub2" title={<span><Icon type="folder" /><span>All Accounts</span></span>}>
            <Menu.Item key="5">Checking</Menu.Item>
            <Menu.Item key="6">Savings</Menu.Item>
          </SubMenu>
        </Menu>

        <NewAccountButton labelText="New Account" handleSubmit={() => null} />

      </Styles>
    )
  }
}
