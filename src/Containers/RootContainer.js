import React, { Component } from 'react'
import { connect } from 'react-redux'
import StartupActions from '../Redux/Actions/StartupActions'

// Styles
import Routes from '../Navigation/Routes'
import { Redirect, Route } from 'react-router'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import BoardScreen from './Boards'
import Board from './Board'
import { BrowserRouter as Router } from 'react-router-dom'
import Container from '../Components/Container'

class RootContainer extends Component {
  render () {
    const { isAuthenticated } = this.props.auth
    return (
      <Container
        isAuthenticated={isAuthenticated}
        menuOnClick={({ key }) => {
          this.props.history.push('/' + key)
        }}
      >
        <Router>
          <Route
            exact
            path='/'
            render={() => {
              if (isAuthenticated === true) {
                return <Redirect to='/board' />
              } else {
                return <HomePage />
              }
            }}
          />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/board' component={BoardScreen} />
          <Route
            path='/board-item/:id' render={(props) => {
              return <Board key={props.match.params.id} />
            }}
          />
        </Router>
      </Container>
    )
  }

  componentDidMount () {
    this.props.startup()
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
