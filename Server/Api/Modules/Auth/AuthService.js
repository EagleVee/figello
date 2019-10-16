import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import UserRepository from '../User/UserRepository'
import AccessTokenRepository from '../AccessToken/AccessTokenRepository'

import { JWT_SECRET, SECRET_KEY, TOKEN_EXPIRE_MILLISECOND } from '../../../Config'

const login = async (data) => {
  if (!data.email || !data.password) {
    throw new Error('MISSING INPUT!')
  }
  const existedUser = await UserRepository.findByEmail(data.email)
  if (!existedUser) {
    throw new Error('CANNOT FIND USER WITH THIS EMAIL!')
  }

  const result = await bcrypt.compare(data.password, existedUser.password)
  if (result) {
    const tokenData = {
      _id: existedUser._id,
      name: existedUser.name,
      email: existedUser.email,
      role: existedUser.role
    }

    const accessToken = await jwt.sign(tokenData, JWT_SECRET, {
      expiresIn: '7 days'
    })

    return {
      user: existedUser,
      access_token: accessToken
    }
  } else {
    throw new Error('WRONG PASSWORD!')
  }
}

const register = async (data) => {
  if (!data.email || !data.password || !data.name) {
    throw new Error('MISSING INPUT!')
  }
  const existedUser = await UserRepository.findByEmail(data.email)
  if (existedUser) {
    throw new Error('USER EXISTED!')
  }
  const newPassword = await bcrypt.hash(data.password, SECRET_KEY)
  return UserRepository.create({
    name: data.name,
    email: data.email,
    password: newPassword
  })
}

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const accessToken = AccessTokenRepository.findByToken(token)
    if (!accessToken) {
      res.status(401).send('Invalid token!')
    }
    if (accessToken.expire_at <= Date.now()) {
      res.status(401).send('Token expired!')
    }
    req.user = jwt.verify(token, SECRET_KEY)
    next()
  } catch (err) {
    res.status(401).send('Unauthenticated!')
  }
}

const authorization = (user, roles) => {
  return !!(user && roles.indexOf(user.role) >= 0)
}

const validateToken = async (token) => {
  const accessToken = await AccessTokenRepository.findByToken(token)
  if (!accessToken) {
    throw new Error('Invalid token!')
  }
  if (accessToken.expire_at <= Date.now()) {
    return {
      jwt_token: token,
      is_alive: false
    }
  }

  return {
    jwt_token: accessToken.jwt_token,
    is_alive: true
  }
}

const refreshToken = async (token) => {
  const newExpireDate = Date.now() + TOKEN_EXPIRE_MILLISECOND
  return AccessTokenRepository.updateExpireAt(token, newExpireDate)
}

const service = {
  login,
  register,
  authentication,
  authorization
}

export default service
