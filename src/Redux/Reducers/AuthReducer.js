import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import { AuthTypes } from '../Actions/AuthActions'

export const INITIAL_STATE = Immutable({
  phone: '',
  isAuthenticated: false,
  user: {}
})

export const loginSuccess = (state, action) => {
  const { data } = action.response
  const { user } = data
  return state.merge({
    isAuthenticated: true,
    user: user
  })
}

export const validateTokenSuccess = (state, action) => {
  const { data } = action.response
  return state.merge({
    isAuthenticated: true,
    user: data.user
  })
}

export const logoutSuccess = (state, action) => {
  return state.merge({
    isAuthenticated: false,
    user: {}
  })
}

export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.LOGIN_SUCCESS]: loginSuccess,
  [AuthTypes.VALIDATE_TOKEN_SUCCESS]: validateTokenSuccess,
  [AuthTypes.LOGOUT_SUCCESS]: logoutSuccess
})
