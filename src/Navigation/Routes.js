import React from 'react'
import HomePage from '../Containers/HomePage'
import LoginPage from '../Containers/LoginPage'
import RegisterPage from '../Containers/RegisterPage'
import BrowseBoardPage from '../Containers/BrowseBoardPage'
import Board from '../Containers/Board'
import { Route, BrowserRouter as Router } from 'react-router-dom'

export default (
  <Router>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/home' component={HomePage} />
    <Route exact path='/login' component={LoginPage} />
    <Route exact path='/register' component={RegisterPage} />
    <Route exact path='/board' component={BrowseBoardPage} />
    <Route path='/board-item/:id' component={Board} />
  </Router>
)
