import React, { Component } from 'react'
// import logo from '../Images/logo.svg'
import './NavBar.css'

export default class Navbar extends Component {
  render () {
    return (
      <div className='navbar'>
        <div className='container'>
          <div className='row'>
            <div className=' col-xs-12'>
              Wellcome Figello
            </div>
          </div>
          <div className='row'>
            <div className='span'>
              <span>Home</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
