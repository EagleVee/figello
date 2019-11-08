import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Styles/ProfilePage.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Avatar from '../Images/avatar.jpg'

class ProfilePage extends Component {
  render () {
    const { user } = this.props.auth
    const { first_name, last_name, email } = user
    const fullName = first_name + ' ' + last_name
    return (
      <div className='container profile-page'>
        <div className='row profile-wrapper'>
          <div className='col-3 profile-aside'>
            <div className='aside-ava-wrapper'>
              <img src={Avatar} />
              <div className='profile-user'>
                <span className='aside-name d-block'>{fullName}</span>
                <span className='aside-email d-block'>{email}</span>
              </div>
            </div>
          </div>
          <div className='col-8 profile-aside'>
            <div className='profile-body'>
              <h2>Information</h2>
              <div className='profile-form'>
                <div className='profile-element'>
                  <h5>Name Of User : </h5>
                  <input value={fullName} className='profile-detail' />
                </div>
                <div className='profile-element'>
                  <h5>E-mail :</h5>
                  <input value={email} className='profile-detail' />
                </div>
                <div className='profile-element'>
                  <h5>Password : </h5>
                  <input type='password' name='password' value='123456' className='profile-detail' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
