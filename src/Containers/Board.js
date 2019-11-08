import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './Styles/BoardPage.css'
import ColumnList from '../Components/ColumnList/ColumnList'
import { connect } from 'react-redux'

class Board extends Component {
  constructor (props) {
    super(props)
    this.state = {
      columns: [
        {
          _id: 1,
          name: 'Backlog'
        },
        {
          _id: 2,
          name: 'To do'
        },
        {
          _id: 3,
          name: 'Doing'
        },
        {
          _id: 4,
          name: 'Finished'
        }
      ],
      data: []
    }
  }

  render () {
    return (
      <div className='main-background'>
        <div className='wrapper pl-3 pr-3'>
          <div className='row'>
            <ColumnList
              columns={this.state.columns}
            />
          </div>
        </div>
      </div>
    )
  }

  componentDidMount () {
    console.log('HISTORY', this.props.history)
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
