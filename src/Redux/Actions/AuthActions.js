import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  login: ['data', 'onSuccess', 'onFailed'],
  loginSuccess: ['response'],
  register: ['data', 'onSuccess', 'onFailed'],
  validateToken: [],
  validateTokenSuccess: ['response'],
  me: [],
  meSuccess: ['response'],
  refreshToken: [],
  refreshTokenSuccess: ['response'],
  logout: ['onSuccess', 'onFailed'],
  logoutSuccess: ['response']
})

export const AuthTypes = Types

export default Creators
