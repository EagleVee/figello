import { put, call } from 'redux-saga/effects'
import API from '../Lib/API'
import CookieHelper from '../Common/CookieHelper'

export function * startup (action) {
  const accessToken = CookieHelper.get('accessToken')
}
