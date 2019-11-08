import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import './Styles/LoginPage.css'
import LoginImage from '../Images/login.png'
import AuthActions from '../Redux/Actions/AuthActions'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  render() {
    return (
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
    )
  }

  renderForm() {
    const { error } = this.state
    return (
      <div
        className='align-self-center col-lg-6 col-md-12 col-sm-12'
      >
        <div className='col-12'>
          <h4 className='header-text text-left'>
            START YOUR PERSONAL TEAMWORK EXPERIENCE
          </h4>
          <h2 className='header-main-text text-left'>
            Login To Your Account
          </h2>
        </div>
        <form
          onSubmit={this.loginOnSubmit}
        >
          <div className=''>
            {error !== ''
              ? <p className='text-danger'>{error}</p>
              : <div />
            }
            <p className='p-2 text-left'>E-mail</p>
            <input
              type='email'
              className='mb-3 login-input col-md-10'
              name='email'
              placeholder='Your E-mail'
              onChange={this.handleEmailOnChange}
            />
            <p className='input-header text-left'>Password</p>
            <input
              type='password'
              className='mb-3 login-input col-md-10'
              name='password'
              placeholder='Your Password'
              onChange={this.handlePasswordOnChange}
            />
          </div>
          {this.renderFormFooter()}
        </form>
      </div>
    )
  }

  renderFormFooter() {
    return (
      <div className='footer row'>
        <div className='col-5 text-left'>
          <Link
            className='btn btn-outline-primary btn-white footer-btn'
            to='/register'
          >
            Register
          </Link>
        </div>
        <div className='col-5 text-right'>
          <button
            type='submit'
            className='btn btn-primary footer-btn'
            onClick={this.loginOnSubmit}>
            Login
          </button>
        </div>
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
    const {email, password} = this.state
    const {login} = this.props
    const data = {
      email: email,
      password: password
    }
    login(data, this.loginOnSuccess, this.loginOnFailed)
  }

  loginOnSuccess = () => {
    this.props.history.push('/boards')
  }

  loginOnFailed = (response) => {
    const { message } = response
    this.setState({
      error: message
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
    login: (data, onSuccess, onFailed) => dispatch(AuthActions.login(data, onSuccess, onFailed))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
