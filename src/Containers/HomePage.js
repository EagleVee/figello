import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Styles/HomePage.css'
import { connect } from 'react-redux'

class Homepage extends Component {
  render () {
    return (
      <div className='home-header text-center row'>
        <div className='align-self-center col-12'>
          <h1 className='welcome text-white'>WELCOME TO FIGELLO</h1>
          <h4 className='slogan text-white mt-2'>START YOUR PERSONAL TEAMWORK EXPERIENCE</h4>
          <Link to='/register' className='get-started btn btn-light text-dark mt-5'>
              GET STARTED
          </Link>
        </div>
      </div>
    )
  }

  componentDidMount () {
    // const { isAuthenticated } = this.props.auth
    // if (isAuthenticated) {
    //   this.props.history.push('/board')
    // }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
