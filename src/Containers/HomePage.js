import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Styles/HomePage.css'
import NavBar from '../Components/NavBar/NavBar'
import { connect } from 'react-redux'

class Homepage extends Component {
  render () {
    return (
      <div className='App'>
        <NavBar />
        <div className='home-image'>
          <div className='home-text'>
            <h1>WELCOME TO FIGELLO</h1>
            <h4>START YOUR PERSONAL TEAMWORK EXPERIENCE</h4>
            {this.renderButton()}
          </div>
        </div>
      </div>

    )
  }

  renderButton () {
    return (
      <div className='home-button-container'>
        <button className='home-button'>
          <Link to='/login' className='home-button-text'>
            GET STARTED
          </Link>
        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
