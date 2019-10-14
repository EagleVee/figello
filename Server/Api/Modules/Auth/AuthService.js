import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import UserRepository from '../User/UserRepository'
import { SECRET_KEY, JWT_SECRET } from '../../../Config'

export const login = async (data) => {
  if (!data.email || !data.password) {
    throw new Error('MISSING INPUT!')
  }
  const existedUser = await UserRepository.findByEmail(data.email)
  if (!existedUser) {
    throw new Error('CANNOT FIND USER WITH THIS EMAIL!')
  }

  const result = await bcrypt.compare(data.password, existedUser.password)
  if (result) {

  } else {
    throw new Error('WRONG PASSWORD!')
  }
}

export const register = async (data) => {
  console.log('data', data)
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

const generateToken = (data) => {
  return jwt.sign({
    data,
    exp: Math.floor(Date.now() / 1000) + (90 * 60 * 60)
  }, JWT_SECRET)
}

const AuthService = {
  login,
  register
}

export default AuthService
