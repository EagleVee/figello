import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.css'

export default class Card extends Component {
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
    return (
      <a className='pt-1 pb-1 pl-1 pr-1' onClick={this.props.onClickCard}>
        <p className='card-text'>{content}</p>
      </a>
    )
  }
}
