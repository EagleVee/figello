import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { Provider, connect } from 'react-redux'
import createStore from './Redux'
// import Routes from './Navigation/Routes'
import RootContainer from './Containers/RootContainer'

// create our store
const store = createStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default App
