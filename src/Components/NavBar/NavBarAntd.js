import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Input } from 'antd'
import './NavBar.css'
import { Link } from 'react-router-dom'
import Avatar from '../../Images/avatar.jpg' 

const { SubMenu } = Menu

export default class NavBarAntd extends Component {
  static propTypes = {
    itemOnClick: PropTypes.func.isRequired,
    userName: PropTypes.string
  }
  render () {
    return (
      <Menu
        theme='dark'
        style={{ height: '10vh', display: 'flex', alignItems: 'center'}}
        onClick={this.props.itemOnClick}
        mode='horizontal'>
        <Menu.Item key='home' style={style.menuItem} >
          <Icon type='home' />
          HomePage
        </Menu.Item>
        <Menu.Item key='board' style={style.menuItem}>
          <Icon type='carry-out' />
          Board
        </Menu.Item>
        <SubMenu>
          <Input.Search className='bg-light' placeholder="input search text" onSearch={value => console.log(value)} enterButton />
        </SubMenu>
        <SubMenu
          style = {style.rightSubMenu}
          title={
            <span style={style.menuItem}>
              <img src={Avatar} style={style.avatar}/>
            </span>
          }
        >
          <Menu.ItemGroup title={`${this.props.userName}`}>
            <Menu.Item className='bg-dark text-light' key='profile'>Profile And Display</Menu.Item>
            <Menu.Item className='bg-dark text-light' key='home'>Exit</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    )
  }
}

const style = {
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightSubMenu: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: '50%',
  }
}
