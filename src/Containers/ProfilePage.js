import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Styles/ProfilePage.css'
import PropTypes from 'prop-types'
import Container from '../Components/Container'
import { connect } from 'react-redux'
import Avatar from '../Images/avatar.jpg'


class ProfilePage extends Component {
  static propTypes = {
    userName: PropTypes.string

  }
  render() {
    return (
      <Container
        menuOnClick={({ key }) => {
          this.props.history.push('/' + key)
        }}
      >
        <div className='container profile-page'>
          <div className='row profile-wrapper'>
            <div className='col-3 profile-aside'>
              <div className='aside-ava-wrapper'>
                <img src={Avatar} />
                {this.renderProfile()}
              </div>
            </div>
            <div className='col-8.pro'>
              <div className='profile-body'>
                <h2>Infomation</h2>
                <div className='profile-form'>
                  <div className='profile-element'>
                    <h5>Name Of User : </h5>
                    <input value='Đỗ Quang Huy'></input>
                  </div>
                  <div className='profile-element'>
                    <h5>E-mail :</h5>
                    <input value='doquanghy8888@gmail.com'></input>
                  </div>
                  <div className='profile-element'>
                    <h5>Password : </h5>
                    <input type='password' name='password' value='123456789'></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    )
  }

  renderProfile() {
    return (
      <div className='profile-user'>
        <span className='aside-name d-block'>Đỗ Quang Huy</span>
        <span className='aside-email d-block'>doquanghuy8888@gmail.com</span>
      </div>
    )
  }
}


 

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)