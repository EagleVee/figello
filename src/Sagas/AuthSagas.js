import API from '../Lib/API'
import { call, put } from 'redux-saga/effects'
import AuthActions from '../Redux/Actions/AuthActions'

export function * login (action) {
  const { email, password, onSuccess, onFailed } = action
  const response = yield call(API.login, email, password)
  console.log('RESPONSE', response)
  // if (response.status) {
  //   const accessToken = response.data.access_token
  //   // API.setAccessToken(accessToken)
  //   yield call(onSuccess)
  //   yield put(AuthActions.loginSuccess(response))
  // } else {
  //   console.log('LOGIN FAILED')
  //   yield call(onFailed, response.message)
  // }
}

export function * phoneCheckExist (action) {
  const { phone, onSuccess, onFailed } = action
  const response = yield call(API.phoneCheckExist, phone)
  if (response.status) {
    if (response.data.is_exist) {
      yield call(onFailed, 'Số điện thoại đã có người sử dụng')
    } else {
      yield put(AuthActions.phoneRegister(phone))
      yield call(onSuccess)
    }
  } else {
    console.log('CHECK EXIST ERROR: ', response.message)
    yield call(onFailed, response.message)
  }
}

export function * phoneRegister (action) {
  const { phone } = action
  const response = yield call(API.phoneRegister, phone)
  if (response.status) {
    yield put(AuthActions.sendOTP(phone))
  }
}

export function * sendOTP (action) {
  const { phone } = action
  const response = yield call(API.sendOTP, phone)
  // console.log('SAGA SEND OTP: ', response)
  if (response.status) {
    yield put(AuthActions.sendOTPSuccess(response))
  }
}

export function * confirmOTP (action) {
  const { phone, otp, onSuccess, onFailed } = action
  const response = yield call(API.confirmOTP, phone, otp)
  const { data } = response
  console.log('SAGA CONFIRM OTP: ', response)
  if (response.status) {
    if (data.is_match && !data.is_expired) {
      yield call(onSuccess)
    }
  } else {
    yield call(onFailed, response.message)
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
