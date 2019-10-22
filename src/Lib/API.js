import axios from 'axios'
import * as qs from 'query-string'
// Đây là những cái anh viết trước, syntax ES6, cứ thế mà dùng với viết theo

import {
  API_ENDPOINT,
  REQUEST_TIME_OUT, STATUS_BAD_REQUEST,
  STATUS_INTERNAL_SERVER_ERROR,
  STATUS_OK, STATUS_UNAUTHORIZED
} from '../Config/Remote'

const instance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: REQUEST_TIME_OUT,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*'
  }
})

const checkStatus = (response) => {
  console.log('RESPONSE:', response)
  if (response.status === STATUS_OK) {
    return response.data
  }
  return {}
}

const logError = (error) => {
  console.log('ERROR RESPONSE:', error)
  console.log('ERROR RESPONSE:', error.response)
  if (error.response) {
    const { status, data } = error.response
    if (status === STATUS_BAD_REQUEST) {
      return data
    } else if (status === STATUS_UNAUTHORIZED) {
      return data
    } else if (status === STATUS_INTERNAL_SERVER_ERROR) {
      return {
        data: 'Mã lỗi' + status,
        msg: 'Mã lỗi' + status,
        code: status
      }
    }
  }
  return {
    status: false,
    message: 'Lỗi server',
    error: error
  }
}

const GET = (url, config = {}) => {
  return instance
    .get(url, config)
    .then(checkStatus)
    .catch(logError)
}

const POST = (url, params, config = {}) => {
  return instance
    .post(url, params, config)
    .then(checkStatus)
    .catch(logError)
}

const PUT = (url, params, config = {}) => {
  return instance
    .put(url, params, config)
    .then(checkStatus)
    .catch(logError)
}

const DELETE = (url, config = {}) => {
  return instance
    .delete(url, config)
    .then(checkStatus)
    .catch(logError)
}

const API = {
  getDemo: (params) => {
    // Cách xử lý query params
    const queryString = qs.stringify(params)
    const path = 'demo'
    return GET(path + '?' + queryString)
  },
  // PUT giống post
  login: (email, password) => {
    console.log('EMAIL', email, 'PASS', password)
    const path = '/auth/login'
    const data = {
      email: email,
      password: password
    }
    return POST(path, data, {})
  }
}

export default API
