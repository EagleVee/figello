import React, { Component } from 'react'
import './Styles/HomePage.css'
import LoginImage from '../Images/login.png'

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
          <div className='row'>
            <div className='form-container col-6'>
                    <div className='logo'>
                      {this.renderHeader()}
                      <span>Login To Your Account</span>
                    </div>
                    <div className='form-wrapper'>
                      <form>
                        <div className='name-wrapper'>
                          <p className='input-header text-left'>E-mail</p>
                          <div className='input-wrapper row'>
                            <input
                              type='email'
                              className='col-md-10'
                              name='email'
                              placeholder='Your E-mail'
                              onChange={this.handleEmailOnChange}
                            />
                          </div>
                          <p className='input-header text-left'>Password</p>
                          <div className='input-wrapper row'>
                            <input
                              type='password'
                              className='col-md-10'
                              name='password'
                              placeholder='Your Password'
                              onChange={this.handlePasswordOnChange}
                            />
                          </div>
                  </div>
                  {this.renderFormFooter()}
                </form>
              </div>
            </div>
            <div className="col-6 login-image-container">
              <img src={LoginImage} className='login-image' />
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderFormFooter () {
    return (
      <div className='form-footer'>
        <button>Register</button>
        <button className='button'>Login</button>
      </div>
    )
  }

  renderHeader () {
    return (
      <p className='header-text'>
        START YOUR PERSIONAL PHOTO EXPIERENCE
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
