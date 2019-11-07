import React, { Component } from 'react'
import { connect } from 'react-redux'
import StartupActions from '../Redux/Actions/StartupActions'

// Styles
import history from '../Navigation/History'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import BoardScreen from './Boards'
import Board from './Board'
import { Route, Redirect, Router } from 'react-router-dom'
import Container from '../Components/Container/Container'

// export const history =
class RootContainer extends Component {
  render () {
    const { isAuthenticated, user } = this.props.auth
    const userName = user.first_name ? user.first_name : ''
    return (
      <Container
        userName={userName}
        isAuthenticated={isAuthenticated}
        menuOnClick={({ key }) => {
          history.push('/' + key)
        }}
      >
        <Router history={history}>
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
