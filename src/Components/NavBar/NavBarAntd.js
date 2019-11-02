import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import './NavBar.css'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

export default class NavBarAntd extends Component {
  static propTypes = {
    itemOnClick: PropTypes.func.isRequired
  }
  render () {
    return (
      <Menu
        theme='dark'
        style={{ height: '10vh', display: 'flex', alignItems: 'center'}}
        onClick={this.itemOnClick}
        mode='horizontal'>
        <Menu.Item key='' style={style.menuItem} >
          <Icon type='home' />
          HomePage
        </Menu.Item>
        <Menu.Item key='board' style={style.menuItem}>
          <Icon type='carry-out' />
          Board
        </Menu.Item>
        <SubMenu
          title={
            <span className='submenu-title-wrapper'>
              <Icon type='setting' />
              Navigation Three - Submenu
            </span>
          }
        >
          <Menu.ItemGroup title='Item 1'>
            <Menu.Item key='setting:1'>Option 1</Menu.Item>
            <Menu.Item key='setting:2'>Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title='Item 2'>
            <Menu.Item key='setting:3'>Option 3</Menu.Item>
            <Menu.Item key='setting:4'>Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key='alipay'>
          <Link to='/' target='_blank' rel='noopener noreferrer'>
            Navigation Four - Link
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

const style = {
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}