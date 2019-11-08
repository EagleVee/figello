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
    userName: PropTypes.string,
    logoutOnClick: PropTypes.func,
  }

  static defaultProps = {
    isAuthenticated: false
  }

  render() {
    return (
      <Menu
        selectable={false}
        theme='dark'
        style={style.menu}
        onClick={this.props.itemOnClick}
        mode='horizontal'>
        <Menu.Item key='home' style={style.menuItem}>
          <Icon type='home'/>
          Home
        </Menu.Item>
        <Menu.Item key='boards' style={style.menuItem}>
          <Icon type='carry-out'/>
          Board
        </Menu.Item>
        {this.renderRightMenu()}
      </Menu>
    )
  }

  renderRightMenu() {
    const {isAuthenticated} = this.props
    return (isAuthenticated === true
        ? <SubMenu
          style={style.rightSubMenu}
          title={
            <span style={style.menuItem}>
              <img alt='avatar' src={Avatar} style={style.avatar}/>
            </span>
          }
        >
          <Menu.ItemGroup title={this.props.userName}>
            <Menu.Item className='' key='profile'>Profile And Display</Menu.Item>
            <Menu.Item className='' key='' disabled>
              <button onClick={this.props.logoutOnClick} className='ant-menu-dark text-danger text-left'>
              Log Out
              </button>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        : <div style={style.rightSubMenu}>
          <button
            onClick={() => {
              this.props.itemOnClick({ key: 'login' })
            }}
            style={style.menuItem}
            className='btn btn-dark text-white'
          >
            Login
          </button>
          <button
            onClick={() => {
              this.props.itemOnClick({ key: 'register' })
            }}
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
