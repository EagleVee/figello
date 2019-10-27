import React, { Component } from 'react'
import logo from '../../Images/avatar.jpg'
import './NavBar.css'
import SearchField from './SearchField'
import Home from './Home'
import NavBoard from './NavBoard'

export default class Navbar extends Component {
  render () {
    return (
      <div className='navbar'>
        <div className='container'>
          <div className='row col-8 align-items-center'>
            {this.renderHomeButton()}
            {this.renderNavBoard()}
            <div className='search-field-container col-6'>
              <SearchField />
            </div>
            {this.renderLogo()}
          </div>
          <div className='row'>
            {this.renderAvatar()}
          </div>
        </div>
      </div>
    )
  }

  renderHomeButton () {
    return (
      <div className='home-nav col-1 text-center'>
        <button className='home-nav-button'>Home</button>
      </div>
    )
  }

  renderNavBoard () {
    return (
      <div className='home-nav col-1 text-center'>
        <button className='home-nav-button'>Board</button>
      </div>
    )
  }

  renderLogo () {
    return (
      <div className='home-nav col-1 text-center'>
        <button>FIGELLO</button>
      </div>

    )
  }

  renderAvatar () {
    return (
      <div className='image-wrapper col-2'>
        <img src={logo} />
      </div>
    )
  }
}
