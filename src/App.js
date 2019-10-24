import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import createStore from './Redux'
import Routes from './Navigation/Routes'

// create our store
const store = createStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        {Routes}
      </Provider>
    )
  }
}

export default App
