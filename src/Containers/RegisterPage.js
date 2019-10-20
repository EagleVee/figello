import React, { Component } from 'react'
// import logo from '../Images/logo.svg'
import './Styles/RegisterPage.css'
import NavBar from '../Components/NavBar/NavBar'
import LoginImage from '../Images/login.png'

export default class RegisterPage extends Component {
  render () {
    return (
      <div className='App'>
        <NavBar />
        <div className='container'>
          <div className='row'>
            <section className='row'>
              <div className='form-container col-6'>
                <div className='logo'>
                  <span>Create New Account</span>
                </div>
                <div className='form-wrapper'>
                  <form>
                    <div className='name-wrapper'>
                      <div className='input-wrapper row'>
                        <input type='text' className='col-md-5' name='firstName' placeholder='First Name' />
                        <input type='text' className='col-md-5 col-md-offset-5' name='lastName' placeholder='Last Name' />
                      </div>
                      <div className='input-wrapper row'>
                        <input type='email' className='col-md-10' name='email' placeholder='Email' />
                      </div>
                      <div className='input-wrapper row'>
                        <input type='password' className='col-md-10' name='password' placeholder='Password' />
                      </div>
                      <div className='input-wrapper row'>
                        <input type='password' className='col-md-10' name='confirmPassword' placeholder='Confirm Password' />
                      </div>
                    </div>
                    <div className='form-footer'>
                    Already have an account? <a className='login' href='#'>Login</a>
                      <button className='register'>Register</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='col-6 login-image-container'>
                <img src={LoginImage} className='login-image' />
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}
