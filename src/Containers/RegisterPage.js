import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Styles/RegisterPage.css'
import LoginImage from '../Images/login.png'
import AuthActions from '../Redux/Actions/AuthActions'
import {connect} from 'react-redux'

class RegisterPage extends Component {
  constructor(props) {
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

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.renderForm()}
          <div className='align-self-center col-6 d-sm-none d-md-none d-lg-inline overflow-hidden'>
            <img src={LoginImage} className='login-image' alt='register'/>
          </div>
        </div>
      </div>
    )
  }

  renderForm() {
    return (
      <div className='col-lg-6 col-md-12 col-sm-12 align-self-center text-center'>
        <div>
          <h2 className='mb-5'>Create New Account</h2>
        </div>
        <div className='text-center'>
          <form
            className='text-center'
            onSubmit={this.onSubmit}
          >
            <input
              type='text'
              className='mb-3 login-input col-10 mr-1'
              name='firstName'
              placeholder='First Name'
              onChange={(event) => {
                this.onTextChange(event, 'firstName')
              }}
            />
            <input
              type='text'
              className='mb-3 login-input col-10'
              name='lastName'
              placeholder='Last Name'
              onChange={(event) => {
                this.onTextChange(event, 'lastName')
              }}
            />
            <input
              type='email'
              className='mb-3 login-input col-10'
              name='email'
              placeholder='Email'
              onChange={(event) => {
                this.onTextChange(event, 'email')
              }}
            />
            <input
              type='password'
              className='mb-3 login-input col-10'
              name='password'
              placeholder='Password'
              onChange={(event) => {
                this.onTextChange(event, 'password')
              }}
            />
            <input
              type='password'
              className='mb-3 login-input col-10'
              name='confirmPassword'
              placeholder='Confirm Password'
              onChange={(event) => {
                this.onTextChange(event, 'confirmPassword')
              }}
            />
            <div className='footer text-center'>
              Already have an account?&nbsp;
              <Link className="login" to='/login'>
                Login
              </Link>
              <button
                className='btn btn-outline-primary footer-btn ml-2'
                type="submit"
                onSubmit={this.onSubmit}
              >
                Register
              </button>
            </div>
          </form>
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
    const {password, confirmedPassword} = this.state
    if (!password === confirmedPassword) {
      this.setState({
        error: 'Password and confirmed password are not match'
      })
    } else {
      this.doRegister()
    }
  }

  doRegister = () => {
    const {register} = this.props
    const {firstName, lastName, email, password} = this.state
    register(firstName, lastName, email, password, this.registerOnSuccess, this.registerOnFailed)
  }

  registerOnSuccess = () => {
    this.props.history.push('/boards')
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
