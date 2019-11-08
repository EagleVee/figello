import React, { Component } from 'react'
import { connect } from 'react-redux'
import StartupActions from '../Redux/Actions/StartupActions'
import AuthActions from '../Redux/Actions/AuthActions'

// Styles
import history from '../Navigation/History'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import BrowseBoardPage from './BrowseBoardPage'
import BoardPage from './BoardPage'
import { Route, Redirect, Router } from 'react-router-dom'
import Container from '../Components/Container/Container'
import ProfilePage from './ProfilePage'

// export const history =
class RootContainer extends Component {
  render () {
    const { isAuthenticated, user } = this.props.auth
    const userName = user.first_name ? user.first_name : ''
    return (
      <Container
        logoutOnClick={this.handleLogoutOnClick}
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
                return <Redirect to='/boards' />
              } else {
                return <HomePage />
              }
            }}
          />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/boards' component={BrowseBoardPage} />
          <Route exact path='/profile' component={ProfilePage} />
          <Route
            exact
            path='/board/:id' render={(props) => {
              return <BoardPage key={props.match.params.id} match={props.match} />
            }}
          />
        </Router>
      </Container>
    )
  }

  handleLogoutOnClick = (event) => {
    event.preventDefault()
    this.props.logout(this.logoutSuccess)
  }

  logoutSuccess = () => {
    history.push('/home')
  }

  componentDidMount () {
    this.props.startup()
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
  logout: (onSuccess, onFailed) => dispatch(AuthActions.logout(onSuccess, onFailed)),
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
