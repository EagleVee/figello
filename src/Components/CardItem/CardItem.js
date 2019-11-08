import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types'
import './CardItem.css'

export default class CardItem extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  }
  render () {
    const { title, tag } = this.props.data
    const getItemStyle = (_isDragging, draggableStyle) => ({
      // some basic styles to make the items look a bit nicer
      userSelect: 'none',
      // change background colour if dragging
      // styles we need to apply on draggables
      ...draggableStyle
    })
    return (
      <Draggable key={this.props.data._id} draggableId={this.props.data._id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            <Row gutter={10} type='flex' className='card-item-wrapper'>
              <Col xs={24}>
                {tag.map((val, index) => {
                  return <div className='card-label-wrapper'>
                    <span className='card-label' style={{backgroundColor: val.color}}/>
                  </div>
                })}
                <div>
                  <span>{this.props.data && title}</span>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Draggable>
    )
  }
}
