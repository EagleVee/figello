import React, { Component } from 'react'
import { Layout } from 'antd'
import NavBarAntd from '../NavBar/NavBarAntd'
import PropTypes from 'prop-types'
const { Header, Content } = Layout
export default class Container extends Component {
  static propTypes = {
    menuOnClick: PropTypes.func.isRequired
  }
  render () {
    return (
      <Layout>
        <Header className='fixed-top'>
          <NavBarAntd
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
