import API from '../Lib/API'
import { call, put } from 'redux-saga/effects'
import AuthActions from '../Redux/Actions/AuthActions'
import BoardActions from '../Redux/Actions/BoardActions'
import CookieHelper from '../Common/CookieHelper'

export function * login (action) {
  const { email, password, onSuccess, onFailed } = action
  const response = yield call(API.auth.login, email, password)
  if (response.status) {
    const { user, access_token } = response.data
    CookieHelper.set('accessToken', access_token)
    yield call(API.setHeaderToken, access_token)
    yield put(AuthActions.loginSuccess(response))
    yield put(BoardActions.getListBoard(user._id))
    if (onSuccess) yield call(onSuccess)
  } else {
    if (onFailed) yield call(onFailed)
  }
}

export function * register (action) {
  const { firstName, lastName, email, password, onSuccess, onFailed } = action
  const response = yield call(API.auth.register, firstName, lastName, email, password)
  if (response.status) {
    yield put(AuthActions.login(email, password, onSuccess))
  } else {
    if (onFailed) yield call(onFailed)
  }
}

export function * validateToken (action) {
  const response = yield call(API.auth.validateToken)
  if (response.status) {
    const { user } = response.data
    yield put(AuthActions.validateTokenSuccess(response))
    yield put(BoardActions.getListBoard(user._id))
  }
}
export function * logoutToken (action) {
  const { onSuccess, onFailed } = action
  const response = yield call(API.auth.logout)
  if (response.status) {
    yield put(AuthActions.logoutTokenSuccess(response))
    yield call(onSuccess)
  } else {
    // yield call(onFailed, 'Có lỗi xảy ra khi đăng xuất')
  }
}
