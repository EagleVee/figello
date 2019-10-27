import React, { Component } from 'react'
// import logo from '../Images/logo.svg'

export default class SearchField extends Component {
  render () {
    return (
      <form className='col-12'>
        <input className='form-control' type='text' placeholder='Search' />
      </form>
    )
  }
}
