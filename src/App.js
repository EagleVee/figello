import React from 'react'
import './App.css'
import HomePage from './Containers/HomePage'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import DetailPage from './Containers/DetailPage'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = (
  <Router>
    <Route exact path='/' component={HomePage} />
    <Route path='/detail' component={DetailPage} />
  </Router>
)

export default App
