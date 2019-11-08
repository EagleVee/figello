import React, { Component } from 'react'
import {Button, Modal} from 'antd'
import 'antd/dist/antd.css'
import './Styles/BoardPage.css'
import ColumnList from '../Components/ColumnList/ColumnList'
import { connect } from 'react-redux'
import BoardActions from '../Redux/Actions/BoardActions'

class BoardPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cardModalVisible: false,
      columnModalVisible: false,
      cardTitle: '',
      columnTitle: ''
    }
  }

  render () {
    const { board } = this.props
    const { listColumn } = board
    return (
      <div className='main-background'>
        <div className='wrapper pl-3 pr-3'>
          <div className='column-container'>
            <ColumnList
              newCardOnClick={this.handleNewCardOnClick}
              columns={listColumn}
            />
            <div className='add-column-wrapper' onClick={this.handleNewColumnOnClick}>
              <i className='fa fa-plus mr-2 add-icon' />
              <span className='add-column-label'>Add column</span>
            </div>
          </div>
        </div>
        {this.renderAddCardModal()}
        {this.renderAddColumnModal()}
      </div>
    )
  }

  renderAddCardModal () {
    return (
      <Modal
        title='Create new card'
        visible={this.state.cardModalVisible}
        onCancel={() => {
          this.setCardModalInvisible()
        }}
        footer={[
          <Button key="submit" type="primary" onClick={this.handleCreateCard}>
            Create
          </Button>
        ]}
      >
        <p className='title-modal'>New Card Title: </p>
        <input
          className='title-input'
          type='text'
          value={this.state.cardTitle}
          onChange={(e) => {
            this.setState({
              cardTitle: e.target.value
            })
          }}/>
      </Modal>
    )
  }

  renderAddColumnModal = () => {
    return (
      <Modal
        title='Create new column'
        visible={this.state.columnModalVisible}
        onCancel={() => {
          this.setColumnModalInvisible()
        }}
        footer={[
          <Button key="submit" type="primary" onClick={this.handleCreateColumn}>
            Create
          </Button>
        ]}
      >
        <p className='title-modal'>New Column Title: </p>
        <input
          className='title-input'
          type='text'
          value={this.state.columnTitle}
          onChange={(e) => {
            this.setState({
              columnTitle: e.target.value
            })
          }}/>
      </Modal>
    )
  }

  handleNewColumnOnClick = () => {
    this.setColumnModalVisible()
  }

  handleCreateColumn = () => {
    const { id } = this.props.match.params
    const { createColumn } = this.props
    const { columnTitle } = this.state
    const data = {
      board: id,
      title: columnTitle
    }
    createColumn(data, this.createColumnSuccess, this.createColumnFailed)
  }

  createColumnSuccess = () => {
    this.setColumnModalInvisible(() => {
      this.getColumnList()
    })
  }

  createColumnFailed = () => {
    this.setColumnModalInvisible()
  }

  handleNewCardOnClick = (columnId) => {
    this.setState({
      column: columnId
    })
    this.setCardModalVisible()
  }

  handleCreateCard = (event) => {
    const { createCard, auth } = this.props
    const { user } = auth
    const { cardTitle, column } = this.state
    const data = {
      title: cardTitle,
      column: column,
      created_by: user._id
    }
    createCard(data, this.createCardSuccess, this.createCardFailed)
  }

  createCardSuccess = () => {
    this.setCardModalInvisible(() => {
      this.setState({
        cardTitle: ''
      })
      this.getColumnList()
    })
  }

  createCardFailed = () => {
    this.setCardModalInvisible()
  }

  setCardModalVisible = () => {
    this.setState({
      cardModalVisible: true
    })
  }

  setCardModalInvisible = (callback) => {
    this.setState({
      cardModalVisible: false
    }, callback)
  }

  setColumnModalVisible = () => {
    this.setState({
      columnModalVisible: true
    })
  }

  setColumnModalInvisible = (callback) => {
    this.setState({
      columnModalVisible: false
    }, callback)
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
    auth: state.auth,
    board: state.board
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getListColumn: (id) => dispatch(BoardActions.getListColumn(id)),
    createColumn: (data, onSuccess, onFailed) => dispatch(BoardActions.createColumn(data, onSuccess, onFailed)),
    createCard: (data, onSuccess, onFailed) => dispatch(BoardActions.createCard(data, onSuccess, onFailed))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardPage)
