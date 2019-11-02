import React, { Component } from 'react'
import { Layout } from 'antd'
import NavBarAntd from '../NavBar/NavBarAntd'
const { Header, Content } = Layout
export default class Container extends Component {
  render () {
    return (
      <Layout>
        <Header className='fixed-top' style={{ height: '10vh' }}>
          <NavBarAntd />
        </Header>
        <Content>
          {this.props.children}
        </Content>
      </Layout>

    )
  }
}
