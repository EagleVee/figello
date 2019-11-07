import React, { Component } from 'react'
import { Layout } from 'antd'
import NavBarAntd from '../NavBar/NavBarAntd'
import PropTypes from 'prop-types'
const { Header, Content } = Layout
export default class Container extends Component {
  static propTypes = {
    containerStyle: PropTypes.object,
    menuOnClick: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    userName: PropTypes.string
  }
  render () {
    const layoutStyle = {
      height: '100vh',
      ...this.props.containerStyle
    }
    return (
      <Layout style={layoutStyle}>
        <Header className='fixed-top row' style={{ height: '10vh' }}>
          <NavBarAntd
            loginOnPress={this.props.loginOnPress}
            registerOnPress={this.props.registerOnPress}
            isAuthenticated={this.props.isAuthenticated}
            userName={this.props.userName}
            itemOnClick={this.props.menuOnClick}
          />
        </Header>
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    )
  }
}
