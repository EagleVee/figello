import API from '../Lib/API'
import { call, put } from 'redux-saga/effects'
import AuthActions from '../Redux/Actions/AuthActions'
import CookieHelper from '../Common/CookieHelper'

export function * login (action) {
  const { email, password, onSuccess, onFailed } = action
  const response = yield call(API.login, email, password)
  if (response.status) {
    const accessToken = response.data.access_token
    CookieHelper.set('accessToken', accessToken)
    yield put(AuthActions.loginSuccess(response))
    if (onSuccess) yield call(onSuccess)
  } else {
    if (onFailed) yield call(onFailed)
  }
}

export function * register (action) {
  const { firstName, lastName, email, password, onSuccess, onFailed } = action
  const response = yield call(API.register, firstName, lastName, email, password)
  if (response.status) {
    yield put(AuthActions.login(email, password, onSuccess))
  } else {
    if (onFailed) yield call(onFailed)
  }
}

export function * validateToken (action) {
  const response = yield call(API.validateToken)
  const { data } = response
  if (response.status) {
    if (data.is_alive) {
      yield put(AuthActions.refreshToken())
    }
  }
}

export function * refreshToken (action) {
  const response = yield call(API.refreshToken)
  if (response.status) {
    yield put(AuthActions.refreshTokenSuccess(response))
  }
}
export function * logoutToken (action) {
  const { onSuccess, onFailed } = action
  const response = yield call(API.logoutToken)
  if (response.status) {
    yield put(AuthActions.logoutTokenSuccess(response))
    yield call(onSuccess)
  } else {
    // yield call(onFailed, 'Có lỗi xảy ra khi đăng xuất')
  }
}

export function * me (action) {
  const response = yield call(API.me)
  if (response.status) {
    yield put(AuthActions.meSuccess(response))
  }
}
