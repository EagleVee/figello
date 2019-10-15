import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import UserRepository from '../User/UserRepository'
import { SECRET_KEY, JWT_SECRET } from '../../../Config'

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

    const token = await jwt.sign(tokenData, JWT_SECRET, {
      expiresIn: '30 days'
    })

    return {
      user: existedUser,
      access_token: token
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
    const data = await jwt.verify(token, SECRET_KEY)
    if (data) {
      if (data.exp <= Date.now() / 1000) {
        res.status(401).send('Token expired!')
      }
    }
    req.user = data
    next()
  } catch (err) {
    res.status(401).send('Unauthenticated!')
  }
}

const authorization = (user, roles) => {
  return !!(user && roles.indexOf(user.role) >= 0)
}

const AuthService = {
  login,
  register,
  authentication,
  authorization
}

export default AuthService
