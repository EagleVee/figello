import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Styles/RegisterPage.css'
import NavBar from '../Components/NavBar/NavBar'
import LoginImage from '../Images/login.png'
import AuthActions from '../Redux/Actions/AuthActions'
import {connect} from 'react-redux'

class RegisterPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    }
  }
  render () {
    return (
      <div className='App'>
        <NavBar />
        <div className='container'>
          <div className='row'>
            <section className='row col-12'>
              <div className='form-container col-lg-6 col-md-12 col-sm-12'>
                <div className='logo'>
                  <span>Create New Account</span>
                </div>
                <div className='form-wrapper'>
                  <form
                    onSubmit={this.onSubmit}
                  >
                    <div className='name-wrapper'>
                      <div className='input-wrapper row'>
                        <input
                          type='text'
                          className='col-md-5'
                          name='firstName'
                          placeholder='First Name'
                          onChange={(event) => {
                            this.onTextChange(event, 'firstName')
                          }}
                        />
                        <input
                          type='text'
                          className='col-md-5 col-md-offset-5'
                          name='lastName'
                          placeholder='Last Name'
                          onChange={(event) => {
                            this.onTextChange(event, 'lastName')
                          }}
                        />
                      </div>
                      <div className='input-wrapper row'>
                        <input
                          type='email'
                          className='col-md-10'
                          name='email'
                          placeholder='Email'
                          onChange={(event) => {
                            this.onTextChange(event, 'email')
                          }}
                        />
                      </div>
                      <div className='input-wrapper row'>
                        <input
                          type='password'
                          className='col-md-10'
                          name='password'
                          placeholder='Password'
                          onChange={(event) => {
                            this.onTextChange(event, 'password')
                          }}
                        />
                      </div>
                      <div className='input-wrapper row'>
                        <input
                          type='password'
                          className='col-md-10'
                          name='confirmPassword'
                          placeholder='Confirm Password'
                          onChange={(event) => {
                            this.onTextChange(event, 'confirmPassword')
                          }}
                        />
                      </div>
                    </div>
                    <div className='footer'>
                    Already have an account?
                      <Link className="login" to='/login'>
                      Login
                      </Link>
                      <button
                        className='register'
                        type="submit"
                        onSubmit={this.onSubmit}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='col-6 d-sm-none d-md-none d-lg-inline login-image-container'>
                <img src={LoginImage} className='login-image' alt='register' />
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }

  onTextChange = (event, key) => {
    const value = event.target.value
    this.setState({
      [key]: value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { password, confirmedPassword } = this.state
    if (!password === confirmedPassword) {
      this.setState({
        error: 'Password and confirmed password are not match'
      })
    } else {
      this.doRegister()
    }
  }

  doRegister = () => {
    const { register } = this.props
    const { firstName, lastName, email, password } = this.state
    register(firstName, lastName, email, password, this.registerOnSuccess, this.registerOnFailed)
  }

  registerOnSuccess = () => {

  }

  registerOnFailed = () => {

  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (firstName, lastName, email, password, onSuccess, onFailed) => dispatch(AuthActions.register(firstName, lastName, email, password, onSuccess, onFailed))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
