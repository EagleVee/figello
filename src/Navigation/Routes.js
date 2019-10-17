import React from 'react'
import { Route } from 'react-router'

import HomePage from '../Containers/HomePage'
import DetailPage from '../Containers/DetailPage'

export default (
  <Route path='/' component={HomePage}>
    <Route path='/detail' component={DetailPage} />
  </Route>
)
