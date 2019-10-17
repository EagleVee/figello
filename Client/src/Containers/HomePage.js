import React, { Component } from 'react'
import logo from '../Images/logo.svg'
import './Styles/HomePage.css'

export default class HomePage extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>HomePage.js</code> and save to reload.
          </p>
          {this.renderText()}
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }

  renderText () {
    return (
      <p>
        Lorem Ipsum generated
      </p>
    )
  }
}
