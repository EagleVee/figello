import React, { Component } from 'react'
// import logo from '../Images/logo.svg'
import './Styles/DetailPage.css'
import Navbar from './NavBar'

export default class DetailPage extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
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
                    <input type='email' className='col-md-10'  name='email' name='lastName' placeholder='Email' />
                  </div>
                  <div className='input-wrapper row'> 
                    <input type='password' className='col-md-10' name='password' name='lastName' placeholder='Password' />
                  </div>
                  <div className='input-wrapper row'> 
                    <input type='password' className='col-md-10' name='confimPassword' name='lastName' placeholder='Confim Password' />
                  </div>
                </div>
                <div className='form-footer'>
                  <a href='#'>Already have an account?Login</a>
                  <button>Register</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        </div>      
      </div>
    )
  }
}
  