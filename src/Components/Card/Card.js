import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.css'
import {Model, Button} from 'antd'

export default class Card extends Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  static propTypes = {
    onClickCard: PropTypes.func,
    card: PropTypes.object
  }

  static defaultProps = {
    onClickCard: () => {},
    card: {
      content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum'
    }
  }
  render () {
    const { card } = this.props
    const { content } = card
    const { visible, loading } = this.state;
    return (
      <a className='pt-1 pb-1 pl-1 pr-1' onClick={this.props.onClickCard}>
        <p className='card-text'>{content}</p>
      </a>
    )
  }
}
