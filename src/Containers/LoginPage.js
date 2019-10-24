import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import './Styles/LoginPage.css'
import LoginImage from '../Images/login.png'

import AuthActions from '../Redux/Actions/AuthActions'

class LoginPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  render () {
    return (
      <div className='App'>
        <div className='container'>
          <div className='row'>
            <div className='form-container form-container col-lg-6 col-md-12 col-sm-12'>
              {this.renderHeader()}
              <div className='form-wrapper'>
                <form
                  onSubmit={this.handleLoginOnPress}
                >
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
            <div className="col-6 d-sm-none d-md-none d-lg-inline login-image-container">
              <img src={LoginImage} className='login-image' alt='login'/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderFormFooter () {
    return (
      <div className='footer'>
        <button>
          <Link
            to='/register'
          >
            Register
          </Link>
        </button>
        <button type="submit" className='button' onClick={this.handleLoginOnPress}>Login</button>
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

  handleLoginOnPress = (event) => {
    event.preventDefault()
    this.doLogin()
  }

  doLogin = () => {
    const { email, password } = this.state
    const { login } = this.props
    login(email, password, this.loginOnSuccess, this.loginOnFailed)
  }

  loginOnSuccess = () => {
    console.log('LOGIN SUCCESS')
    this.props.history.push('/register')
  }

  loginOnFailed = () => {
    this.setState({
      error: 'Some errors happened'
    })
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password, onSuccess, onFailed) => dispatch(AuthActions.login(email, password, onSuccess, onFailed))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
