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
        <Header className='fixed-top' style={{ height: '10vh' }}>
          <NavBarAntd
            userName='Đỗ Quang Huy'
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
