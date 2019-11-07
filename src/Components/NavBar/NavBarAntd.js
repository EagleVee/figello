import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Menu, Icon, Input} from 'antd'
import './NavBar.css'
import {Link} from 'react-router-dom'
import Avatar from '../../Images/avatar.jpg'

const {SubMenu} = Menu

export default class NavBarAntd extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    itemOnClick: PropTypes.func.isRequired,
    userName: PropTypes.string
  }

  static defaultProps = {
    isAuthenticated: false
  }

  render() {
    return (
      <Menu
        theme='dark'
        style={style.menu}
        onClick={this.props.itemOnClick}
        mode='horizontal'>
        <Menu.Item key='home' style={style.menuItem}>
          <Icon type='home'/>
          HomePage
        </Menu.Item>
        <Menu.Item key='board' style={style.menuItem}>
          <Icon type='carry-out'/>
          Board
        </Menu.Item>
        {this.renderRightMenu()}
      </Menu>
    )
  }

  renderRightMenu() {
    const {isAuthenticated} = this.props
    console.log(isAuthenticated)
    return (isAuthenticated === true
        ? <SubMenu
          style={style.rightSubMenu}
          title={
            <span style={style.menuItem}>
              <img alt='avatar' src={Avatar} style={style.avatar}/>
            </span>
          }
        >
          <Menu.ItemGroup title={`${this.props.userName}`}>
            <Menu.Item className='bg-light text-dark' key=''>Profile And Display</Menu.Item>
            <Menu.Item className='bg-light text-dark' key='home'>Exit</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        : <div style={style.rightSubMenu}>
          <button
            onClick={this.props.loginOnPress}
            style={style.menuItem}
            className='btn btn-dark text-white'
          >
            Login
          </button>
          <button
            onClick={this.props.registerOnPress}
            style={style.menuItem}
            className='btn btn-light text-dark ml-1'
          >
            Register
          </button>
        </div>
    )
  }
}

const style = {
  menu: {
    width: '100%',
    height: '10vh',
    display: 'flex',
    alignItems: 'center'
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightSubMenu: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: '50%'
  }
}
