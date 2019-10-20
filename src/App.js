import React from 'react'
import './App.css'
import LoginPage from './Containers/LoginPage'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import RegisterPage from './Containers/RegisterPage'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = (
  <Router>
    <Route exact path='/login' component={LoginPage} />
    <Route path='/register' component={RegisterPage} />
  </Router>
)

export default App
