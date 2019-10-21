import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Styles/LoginPage.css'
import LoginImage from '../Images/login.png'

export default class LoginPage extends Component {
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
              {this.renderHeader()}
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
              <img src={LoginImage} className='login-image' alt='login'/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderFormFooter () {
    return (
      <div className='form-footer'>
        <button>
          <Link
            to='/register'
          >
            Register
          </Link>
        </button>
        <button className='button'>Login</button>
      </div>
    )
  }

  renderHeader () {
    return (
      <div className='logo col-12'>
        <p className='header-text text-left'>
          START YOUR PERSONAL TEAMWORK EXPERIENCE
        </p>
        <p className='header-main-text text-left'>
          Login To Your Account
        </p>
      </div>

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
