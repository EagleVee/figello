import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import './Styles/LoginPage.css'
import LoginImage from '../Images/login.png'
import NavBar from '../Components/NavBar/NavBar'

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
      <div>
        <NavBar />
        <div className='container'>
          <div className='row'>
            {this.renderForm()}
            <div
              className="align-self-center col-6 d-sm-none d-md-none d-lg-inline overflow-hidden"
            >
              <img src={LoginImage} className='login-image' alt='login'/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderForm () {
    return (
      <div
        className='align-self-center col-lg-6 col-md-12 col-sm-12'
      >
        <div className='col-12'>
          <p className='header-text text-left'>
            START YOUR PERSONAL TEAMWORK EXPERIENCE
          </p>
          <p className='header-main-text text-left'>
            Login To Your Account
          </p>
        </div>
          <form
            onSubmit={this.loginOnSubmit}
          >
            <div className=''>
              <p className='input-header text-left'>E-mail</p>
              <div className='input-wrapper row'>
                <input
                  type='email'
                  className='login-input col-md-10'
                  name='email'
                  placeholder='Your E-mail'
                  onChange={this.handleEmailOnChange}
                />
              </div>
              <p className='input-header text-left'>Password</p>
              <div className='input-wrapper row'>
                <input
                  type='password'
                  className='login-input col-md-10'
                  name='password'
                  placeholder='Your Password'
                  onChange={this.handlePasswordOnChange}
                />
              </div>
            </div>
            {this.renderFormFooter()}
          </form>
        </div>
    )
  }

  renderFormFooter () {
    return (
      <div className='footer'>
          <Link
            className='btn btn-outline-primary btn-white footer-btn'
            to='/register'
          >
            Register
          </Link>
        <button
          type='submit'
          className='btn btn-primary footer-btn'
          onClick={this.loginOnSubmit}>
          Login
        </button>
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

  loginOnSubmit = (event) => {
    event.preventDefault()
    this.doLogin()
  }

  doLogin = () => {
    const { email, password } = this.state
    const { login } = this.props
    login(email, password, this.loginOnSuccess, this.loginOnFailed)
  }

  loginOnSuccess = () => {
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
