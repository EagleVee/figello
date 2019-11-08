import API from '../Lib/API'
import { call, put } from 'redux-saga/effects'
import BoardActions from '../Redux/Actions/BoardActions'

export function * getListBoard (action) {
  const response = yield call(API.board.getListBoard)
  if (response.status) {
    yield put(BoardActions.getListBoardSuccess(response))
  }
}

export function * createBoard (action) {
  const { data, onSuccess, onFailed } = action
  const response = yield call(API.board.createBoard, data)
  if (response.status) {
    yield put(BoardActions.createBoardSuccess(response))
    if (onSuccess) yield call(onSuccess)
  } else {
    if (onFailed) yield call(onFailed)
  }
}

export function * updateBoard (action) {
  const { id, data } = action
  const response = yield call(API.board.updateBoard, id, data)
  if (response.status) {
    yield put(BoardActions.getListBoard())
  }
}

export function * deleteBoard (action) {
  const { id } = action
  const response = yield call(API.board.deleteBoard, id)
  if (response.status) {
    yield put(BoardActions.getListBoard())
  }
}
