import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from '../Column/Column'
import './ColumnList.css'
import PropTypes from "prop-types";

export default class ColumnList extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired
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
                  key={index}
                  index={index}
                  data={val}
                />;
              })
            }
          </div>
        </div>
      </DragDropContext>
    )
  }
}
