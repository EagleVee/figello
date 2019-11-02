import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Styles/HomePage.css'
import Container from '../Components/Container'
import { connect } from 'react-redux'

class Homepage extends Component {
  render () {
    return (
      <Container
        menuOnClick={({ key }) => {
          this.props.history.push('/' + key)}}
      >
        <div className='home-header text-center row'>
          <div className='align-self-center col-12'>
            <h1 className='welcome text-white'>WELCOME TO FIGELLO</h1>
            <h4 className='slogan text-white mt-2'>START YOUR PERSONAL TEAMWORK EXPERIENCE</h4>
            <Link to='/login' className='get-started btn btn-light text-dark mt-5'>
              GET STARTED
            </Link>
          </div>
        </div>
      </Container>
    )
  }

  menuOnClick = ({ key }) => {
    this.props.history.push('/' + key)
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
