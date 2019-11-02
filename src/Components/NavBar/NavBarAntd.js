import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
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
        
        <Menu.Item key='alipay'>
          <Link to='/' target='_blank' rel='noopener noreferrer'>
            Navigation Four - Link
          </Link>
        </Menu.Item>
        <SubMenu
          style = {style.rightSubMenu}
          title={
            <span style={style.menuItem}>
            <img src={Avatar} style={style.avatar}  />
            </span>
          }
        >
          <Menu.ItemGroup title={`${this.props.userName}`}>
            <Menu.Item className='bg-light text-dark' key=''>Profile And Display</Menu.Item>
            <Menu.Item className='bg-light text-dark' key='home'>Exit</Menu.Item>
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
    justifyContent: 'flex-end'
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: '50%'
  }
}
