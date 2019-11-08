import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { StartupTypes } from '../Redux/Actions/StartupActions'
import { AuthTypes } from '../Redux/Actions/AuthActions'
import { BoardTypes } from '../Redux/Actions/BoardActions'

import { startup } from './StartupSagas'
import {
  validateToken,
  login,
  logoutToken,
  register
} from './AuthSagas'
import {
  createBoard,
  createColumn,
  deleteBoard, deleteColumn,
  getListBoard,
  getListColumn,
  updateBoard,
  updateColumn
} from './BoardSagas'

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(AuthTypes.VALIDATE_TOKEN, validateToken),
    takeLatest(AuthTypes.LOGIN, login),
    takeLatest(AuthTypes.LOGOUT_TOKEN, logoutToken),
    takeLatest(AuthTypes.REGISTER, register),
    takeLatest(BoardTypes.GET_LIST_BOARD, getListBoard),
    takeLatest(BoardTypes.CREATE_BOARD, createBoard),
    takeLatest(BoardTypes.UPDATE_BOARD, updateBoard),
    takeLatest(BoardTypes.DELETE_BOARD, deleteBoard),
    takeLatest(BoardTypes.GET_LIST_COLUMN, getListColumn),
    takeLatest(BoardTypes.CREATE_COLUMN, createColumn),
    takeLatest(BoardTypes.UPDATE_COLUMN, updateColumn),
    takeLatest(BoardTypes.DELETE_COLUMN, deleteColumn)
  ])
}
