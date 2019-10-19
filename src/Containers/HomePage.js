import React, { Component } from 'react'
// import logo from '../Images/logo.svg'
import './Styles/HomePage.css'

export default class HomePage extends Component {
  render () {
    return (
      <div className='App'>
        <div className='container'>
          <section className='register-container row'>
            <div className='form-container col-6'>
              <div className='logo'>
                {this.renderHeader()}
                <span>Login Your Acount</span>
              </div>
              <div className='form-wrapper'>
                <form>
                  {this.renderEmail()}
                  <div className='name-wrapper'>
                    <div className='input-wrapper row'>
                      <input type='email' className='col-md-10' name='email' placeholder=' &#9993; Your E-mail' />
                    </div>
                    {this.renderPassword()}
                    <div className='input-wrapper row'>
                      <input type='password' className='col-md-10' name='password' placeholder=' &#9999; Your Password' />
                    </div>
                  </div>
                  <div className='form-footer'>
                    <button>Register</button>
                    {this.renderButton()}
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }

  renderButton () {
    return (
      <button className='button'>Login</button>
    )
  }

  renderHeader () {
    return (
      <p>
        START YOUR PERSIONAL PHOTO EXPIERENCE
      </p>
    )
  }

  renderEmail () {
    return (
      <p>
        E-mail
      </p>
    )
  }

  renderPassword () {
    return (
      <p>
        Password
      </p>
    )
  }
}
