import { put, call } from 'redux-saga/effects'
import API from '../Lib/API'
import CookieHelper from '../Common/CookieHelper'
import AuthActions from '../Redux/Actions/AuthActions'

export function * startup (action) {
  const accessToken = CookieHelper.get('accessToken', '')
  console.log('ACCESS TOKEN', accessToken)
  yield call(API.setHeaderToken, accessToken)
  yield put(AuthActions.validateToken())
}
