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
      modalVisible: false,
      title: ''
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
              newCardOnClick={this.handleNewCardOnClick}
              columns={listColumn}
            />
          </div>
        </div>
        {this.renderAddCardModal()}
      </div>
    )
  }

  renderAddCardModal () {
    return (
      <Modal
        title='Create new board'
        visible={this.state.modalVisible}
        onCancel={() => {
          this.setModalInvisible()
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
          value={this.state.title}
          onChange={(e) => {
            this.setState({
              title: e.target.value
            })
          }}/>
      </Modal>
    )
  }

  handleNewCardOnClick = (columnId) => {
    this.setState({
      column: columnId
    })
    this.setModalVisible()
  }

  handleCreateCard = (event) => {
    const { createCard, auth } = this.props
    const { user } = auth
    const { title, column } = this.state
    const data = {
      title: title,
      column: column,
      created_by: user._id
    }
    createCard(data, this.createCardSuccess, this.createCardFailed)
  }

  createCardSuccess = () => {
    this.setModalInvisible(() => {
      this.getColumnList()
    })
  }

  createCardFailed = () => {
    this.setModalInvisible()
  }

  setModalVisible = () => {
    this.setState({
      modalVisible: true
    })
  }

  setModalInvisible = (callback) => {
    this.setState({
      modalVisible: false
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
    createCard: (data, onSuccess, onFailed) => dispatch(BoardActions.createCard(data, onSuccess, onFailed))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardPage)
