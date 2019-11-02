import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './Card/Card'
import lodash from 'lodash'
import './Card.css'

export default class ListCardVertical extends Component {
  static propTypes = {
    onClickCard: PropTypes.func,
    listTitle: PropTypes.string,
    listCard: PropTypes.array
  }

  static defaultProps = {
    onClickCard: () => {}
  }
  render () {
    const { listTitle } = this.props
    return (
      <div>
        <p>{listTitle}</p>
        {this.renderCard()}
      </div>
    )
  }

  renderCard = () => {
    const { listCard } = this.props
    return (
      <div>
        {listCard.map((card) => <Card />)}
      </div>
    )
  }
}
