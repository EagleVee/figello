import React, { Component } from 'react'
// import logo from '../Images/logo.svg'
import './Styles/DetailPage.css'
import NavBar from './NavBar'

export default class DetailPage extends Component {
  render () {
    return (
      <div className='App'>
        <NavBar />
        <div className='container'>
          <div className='row'>
            <section className='register-container row'>
              <div className='form-container col-6'>
                <div className='logo'>
                  <span>Creat New Acount</span>
                </div>
                <div className='form-wrapper'>
                  <form>
                    <div className='name-wrapper'>
                      <div className='input-wrapper row'>
                        <input type='text' className='col-md-5' name='firstName' placeholder='Fist Name' />
                        <input type='text' className='col-md-5 col-md-offset-5' name='lastName' placeholder='Last Name' />
                      </div>
                      <div className='input-wrapper row'>
                        <input type='email' className='col-md-10' name='email' placeholder='Email' />
                      </div>
                      <div className='input-wrapper row'>
                        <input type='password' className='col-md-10' name='password' placeholder='Password' />
                      </div>
                      <div className='input-wrapper row'>
                        <input type='password' className='col-md-10' name='confimPassword' placeholder='Confim Password' />
                      </div>
                    </div>
                    <div className='form-footer'>
                    Already have an account? <a className='login' href='#'>Login</a>
                      <button className='register'>Register</button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}
