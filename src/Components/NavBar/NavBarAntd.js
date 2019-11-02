import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import './NavBar.css'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

export default class NavBarAntd extends Component {
  render () {
    return (
      <Menu
        theme='dark'
        style={{ height: '10vh', display: 'flex', alignItems: 'center'}}
        onClick={this.itemOnClick}
        mode='horizontal'>
        <Menu.Item key='mail'>
          <Icon type='mail' />
          Navigation One
        </Menu.Item>
        <Menu.Item key='app' disabled>
          <Icon type='appstore' />
          Navigation Two
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
          <a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    )
  }

  itemOnClick = ({ key }) => {
    this.props.history.push('/' + key)
  }
}
