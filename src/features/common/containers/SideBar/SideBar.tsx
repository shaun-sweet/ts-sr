import * as React from 'react'
import Styles from './styles'
import { connect, Dispatch } from 'react-redux'
import { Menu, Icon, Popover, Form, Input, Button, Checkbox } from 'antd'
import NewAccountButton from 'features/Accounts/components/NewAccountButton'
import { Account } from 'types'
import { actions } from 'features/Accounts/redux/actions'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const FormItem = Form.Item
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
}
interface Props {
  dispatch?: (actionCreator) => void
}
interface State {
  visible: boolean
}

class SideBar extends React.Component<Props, State> {
  static displayName = 'SideBar'
  state = {
    visible: false
  }

  hide = () => this.setState({ visible: false })
  handleVisibleChange = (visible) => this.setState({ visible })
  handleAddNewAccount = (newAccount: Account) => {
    this.props.dispatch(actions.saveAccount(newAccount))
  }
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
        <NewAccountButton
          handleAddNewAccount={this.handleAddNewAccount}
          handleVisibleChange={this.handleVisibleChange}
          visible={this.state.visible}
          labelText="New Account"
        />

      </Styles>
    )
  }
}
const mapStateToProps = state => ({})
export default connect(mapStateToProps, null)(SideBar)
