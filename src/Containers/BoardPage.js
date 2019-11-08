import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './Styles/BoardPage.css'
import ColumnList from '../Components/ColumnList/ColumnList'
import { connect } from 'react-redux'
import BoardActions from '../Redux/Actions/BoardActions'

class BoardPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { board } = this.props
    const { listColumn } = board
    return (
      <div className='main-background'>
        <div className='wrapper pl-3 pr-3'>
          <div className='row'>
            <ColumnList
              columns={listColumn}
            />
          </div>
        </div>
      </div>
    )
  }

  componentDidMount () {
    this.getColumnList()
  }

  getColumnList = () => {
    const { getListColumn } = this.props
    const { id } = this.props.match.params
    getListColumn(id)
  }
}

const mapStateToProps = state => {
  return {
    board: state.board
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getListColumn: (id) => dispatch(BoardActions.getListColumn(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardPage)
