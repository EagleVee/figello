import React from 'react'
import LoginPage from '../Containers/LoginPage'
import RegisterPage from '../Containers/RegisterPage'
import {Route, BrowserRouter as Router} from 'react-router-dom'

export default (
  <Router>
    <Route exact path='/login' component={LoginPage} />
    <Route path='/register' component={RegisterPage} />
  </Router>
)
