import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types'
import CardItem from '../CardItem/CardItem'
import './Column.css'

export default class Column extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }
  render () {
    const getListStyle = (isDraggingOver) => ({
      background: isDraggingOver ? 'lightblue' : 'rgb(240, 242, 245)'
    })
    const { title, cards, _id } = this.props.data
    return (
      <div className='wrapper-table'>
        <Row className=''>
          <Col xs={24}>
            <div className='information-stage'>
              {title}
            </div>
          </Col>
        </Row>
        <Row>
          <div className=''>
            <Droppable droppableId={_id}>
              {(provided, snapshot) => {
                console.log(provided)
                return <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {cards.map((val, index) => {
                    return (
                      <CardItem
                        key={index}
                        data={val}
                        index={index}
                      />
                    )
                  })}
                  {provided.placeholder}
                </div>
              }}
            </Droppable>
            <div className='add-wrapper'>
              <i className='fa fa-plus mr-2 add-icon' />
              <span className='add-label'>Add another card</span>
            </div>
          </div>
        </Row>
      </div>
    )
  }
}
