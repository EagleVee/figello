import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import createStore from './Redux'
import Routes from './Navigation/Routes'

// create our store
const store = createStore()

class App extends Component {
  render () {
    console.log('APP')
    return (
      <Provider store={store}>
        {Routes}
      </Provider>
    )
  }
}

export default App
