import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
        <Link to='/' className='text-white navbar-brand' href='#'>
          <i className='fa fa-home' />
        </Link>
        <button
          className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link to='/board' className='nav-link' href='#'>Board</Link>
            </li>
            <li className='nav-item active'>
              <Link to='/board' className='nav-link' href='#'>Figello</Link>
            </li>
          </ul>
        </div>
        {this.renderRightNavBar()}
      </nav>
    )
  }

  renderRightNavBar () {
    const isAuthenticated = false
    return (isAuthenticated
      ? <div />
      : <div className='my-2 my-lg-0'>
        <Link to='/login' className='btn btn-light mr-2'>Login</Link>
        <Link to='/register' className='btn btn-outline-light btn-dark'>Register</Link>
      </div>
    )
  }
}
