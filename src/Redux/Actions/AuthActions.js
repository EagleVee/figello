import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  login: ['phone', 'password', 'onSuccess', 'onFailed'],
  loginSuccess: ['response'],
  facebookLogin: ['callback'],
  googleLogin: ['onSuccess', 'onFailed'],
  googleLogout: [],
  phoneCheckExist: ['phone', 'onSuccess', 'onFailed'],
  phoneRegister: ['phone'],
  sendOTP: ['phone'],
  sendOTPSuccess: ['response'],
  confirmOTP: ['phone', 'otp', 'onSuccess', 'onFailed'],
  userActivation: ['phone', 'fullname', 'address', 'password', 'fbId', 'googleId', 'onSuccess', 'onFailed'],
  validateToken: [],
  validateTokenSuccess: ['response'],
  me: [],
  meSuccess: ['response'],
  refreshToken: [],
  refreshTokenSuccess: ['response'],
  logoutToken: ['onSuccess', 'onFailed'],
  logoutTokenSuccess: ['response']
})

export const AuthTypes = Types

export default Creators
