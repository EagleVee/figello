import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from '../Column/Column'
import './ColumnList.css'

export default class ColumnList extends Component {
  state = {
    data: [{
      _id: 1,
      name: 'Account management',
    }, {
      _id: 2,
      name: 'Board management',
    }, {
      _id: 3,
      name: 'Task management'
    }, {
      _id: 4,
      name: 'Project management',
    }]
  }

  onDragEnd = async (result) => {
    const { draggableId, destination, source } = result;
    if (destination && source) {
      // Update table here
      // this.props.updateTable(source, destination);
      if (destination.droppableId !== source.droppableId) {
        // Change task stage / status
      }
    }
  }
  render () {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <div style={{ display: 'flex' }}>
            {
              this.props.columns.map((val, index) => {
                return <Column
                  index={index}
                  name={val.name}
                  data={this.state.data}
                ></Column>;
              })
            }
          </div>
        </div>
      </DragDropContext>
    )
  }
}
