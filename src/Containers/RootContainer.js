import React, { Component } from 'react'
import { connect } from 'react-redux'
import StartupActions from '../Redux/Actions/StartupActions'

// Styles
import Routes from '../Navigation/Routes'

class RootContainer extends Component {
  componentDidMount () {
    this.props.startup()
  }

  render () {
    return (
      <div>
        {Routes}
      </div>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
