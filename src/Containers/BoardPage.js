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

  handleNewCardOnClick = (event) => {
    // event.preventDefault()
    this.setModalVisible()
  }

  handleCreateCard = (event) => {
    const { createCard } = this.props
    const { title } = this.state
  }

  setModalVisible = () => {
    this.setState({
      modalVisible: true
    })
  }

  setModalInvisible = () => {
    this.setState({
      modalVisible: false
    })
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
    getListColumn: (id) => dispatch(BoardActions.getListColumn(id)),
    createCard: (data) => dispatch(BoardActions.createCard(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardPage)
