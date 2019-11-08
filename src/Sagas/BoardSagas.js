import API from '../Lib/API'
import { call, put } from 'redux-saga/effects'
import BoardActions from '../Redux/Actions/BoardActions'

export function * getListBoard (action) {
  const { id } = action
  const response = yield call(API.board.getListBoard, id)
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

export function * getListColumn (action) {
  const { id } = action
  const response = yield call(API.column.getListColumn, id)
  if (response.status) {
    yield put(BoardActions.getListColumnSuccess(response))
  }
}

export function * createColumn (action) {
  const { data, onSuccess, onFailed } = action
  const response = yield call(API.column.createColumn, data)
  if (response.status) {
    yield put(BoardActions.createBoardSuccess(response))
    if (onSuccess) yield call(onSuccess)
  } else {
    if (onFailed) yield call(onFailed)
  }
}

export function * updateColumn (action) {
  const { id, data } = action
  const response = yield call(API.column.updateColumn, id, data)
  if (response.status) {
    yield put(BoardActions.getListBoard())
  }
}

export function * deleteColumn (action) {
  const { id } = action
  const response = yield call(API.column.deleteColumn, id)
  if (response.status) {
    yield put(BoardActions.getListBoard())
  }
}
