import React, { Component } from 'react'
// import logo from '../Images/logo.svg'
import './Styles/HomePage.css'

export default class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render () {
    return (
      <div className='App'>
        <div className='container'>
          <section className='register-container row'>
            <div className='form-container col-6'>
              <div className='logo'>
                {this.renderHeader()}
                <span>Login Your Acount</span>
              </div>
              <div className='form-wrapper'>
                <form>
                  {this.renderEmail()}
                  <div className='name-wrapper'>
                    <div className='input-wrapper row'>
                      <input
                        type='email'
                        className='col-md-10'
                        name='email'
                        placeholder=' &#9993; Your E-mail'
                        onChange={this.handleEmailOnChange}
                      />
                    </div>
                    {this.renderPassword()}
                    <div className='input-wrapper row'>
                      <input
                        type='password'
                        className='col-md-10'
                        name='password'
                        placeholder=' &#9999; Your Password'
                        onChange={this.handlePasswordOnChange}
                      />
                    </div>
                  </div>
                  <div className='form-footer'>
                    <button>Register</button>
                    {this.renderLoginButton()}
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }

  renderLoginButton () {
    return (
      <button className='button'>Login</button>
    )
  }

  renderHeader () {
    return (
      <p className='header-text'>
        START YOUR PERSIONAL PHOTO EXPIERENCE
      </p>
    )
  }

  renderEmail () {
    return (
      <p>
        E-mail
      </p>
    )
  }

  renderPassword () {
    return (
      <p>
        Password
      </p>
    )
  }

  handleEmailOnChange = (event) => {
    const value = event.target.value
    this.setState({
      email: value
    })
  }

  handlePasswordOnChange = (event) => {
    const value = event.target.value
    this.setState({
      password: value
    })
  }
}
