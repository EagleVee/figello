import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import './Styles/BoardPage.css'
import { connect } from 'react-redux'
import { Card, Avatar, Modal, Button } from 'antd'
import BoardActions from '../Redux/Actions/BoardActions'
import Board from "./Board";

class BrowseBoardPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false,
      title: '',
      description: '',
      colors: ['brown', '#a77858', 'blue', 'green', 'purple', 'orange', '#af3990']
    }
  }

  render () {
    const { board } = this.props
    const { listBoard } = board
    return (
      <div className='container wrapper'>
        <div className='header'>
          <i className='fa fa-user fa-2x mr-3' />
          <h3 className='headline'>Personal boards</h3>
        </div>
        <div className='row'>
          {listBoard.map((board) => {
            const backgroundColor = this.state.colors[Math.floor(Math.random() * this.state.colors.length)]
            return (
              <div key={board._id} className='col-lg-3 col-md-4 col-sm-6 card-container'>
                <Link to={`/board/${board._id}`}>
                  <Card className='card card-light' loading={false} style={{ backgroundColor: backgroundColor }}>
                    <Card.Meta
                      title={board.title}
                      description={board.description}
                    />
                  </Card>
                </Link>
              </div>
            )
          })}
          <div onClick={this.handleNewBoardOnClick} className='col-lg-3 col-md-4 col-sm-6 card-container'>
            <Card className='card card-dark' loading={false} style={{ backgroundColor: '#ddd', minHeight: '100%' }}>
              <div className='vertical-center horizontal-center'>
                <p className='text-center mb-0' style={{ fontSize: '18px' }}>Create new board</p>
              </div>
            </Card>
          </div>
        </div>
        {this.renderModal()}
      </div>
    )
  }

  renderModal = () => {
    return (
      <Modal
        title='Create new board'
        visible={this.state.modalVisible}
        onCancel={() => {
          this.setModalInvisible()
        }}
        footer={[
          <Button key="submit" type="primary" onClick={this.handleCreateBoard}>
            Create
          </Button>
        ]}
      >
        <p className='title-modal'>New Board Title: </p>
        <input
          className='title-input'
          type='text'
          value={this.state.title}
          onChange={(e) => {
          this.setState({
            title: e.target.value
          })
        }}/>
        <p className='title-modal mt-2'>Description:</p>
        <textarea
          className='title-input'
          value={this.state.description}
          onChange={(e) => {
            this.setState({
              description: e.target.value
            })
          }}/>
      </Modal>
    )
  }

  handleNewBoardOnClick = (event) => {
    event.preventDefault()
    this.setModalVisible()
  }

  handleCreateBoard = (event) => {
    const { createBoard, auth } = this.props
    const { title, description } = this.state
    const data = {
      title: title,
      description: description,
      owner: auth.user.id
    }
    createBoard(data, this.createBoardSuccess, this.createBoardFailed)
  }

  createBoardSuccess = () => {
    this.setModalInvisible(() => {
      this.getListBoard()
    })
  }

  createBoardFailed = () => {
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

  getListBoard = () => {
    const { auth, getListBoard } = this.props
    getListBoard(auth.user.id)
  }

  componentDidMount () {
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
    getListBoard: (id) => dispatch(BoardActions.getListBoard(id)),
    createBoard: (data, onSuccess, onFailed) => dispatch(BoardActions.createBoard(data, onSuccess, onFailed))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseBoardPage)
