import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { StartupTypes } from '../Redux/Actions/StartupActions'
import { AuthTypes } from '../Redux/Actions/AuthActions'

import { startup } from './StartupSagas'
import {
  validateToken,
  me,
  login,
  logoutToken,
  refreshToken,
  register
} from './AuthSagas'

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(AuthTypes.VALIDATE_TOKEN, validateToken),
    takeLatest(AuthTypes.ME, me),
    takeLatest(AuthTypes.REFRESH_TOKEN, refreshToken),
    takeLatest(AuthTypes.LOGIN, login),
    takeLatest(AuthTypes.LOGOUT_TOKEN, logoutToken),
    takeLatest(AuthTypes.REGISTER, register)
  ])
}
