import React from 'react'
import { Route } from 'react-router'

import LoginPage from '../Containers/LoginPage'
import RegisterPage from '../Containers/RegisterPage'

export default (
  <Route path='/' component={LoginPage}>
    <Route path='/detail' component={RegisterPage} />
  </Route>
)
