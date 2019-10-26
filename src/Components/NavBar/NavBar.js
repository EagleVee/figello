import React, { Component } from 'react'
// import logo from '../Images/logo.svg'
import './NavBar.css'
import SearchField from './SearchField'
import Home from './Home'
import NavBoard from './NavBoard'

export default class Navbar extends Component {
  render () {
    return (
      <div className='navbar'>
        <div className='container'>
          <div className='row col-6'>
            <Home />
            <NavBoard />
            <SearchField />   
            {this.renderLogo()}
          </div>
          <div className='row'>
            {this.renderAvatar()}
          </div>
        </div>
      </div>
    )
  }
  renderLogo () {
    return (
      <span>FIGELLO</span>
    )
  }

  renderAvatar () {
    return(
      <div className='image-wrapper col-2'>
        <img src='avatar.jpg'/>
      </div>
    )
  }
}
