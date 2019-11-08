import axios from 'axios'
import * as qs from 'query-string'

import {
  API_ENDPOINT,
  REQUEST_TIME_OUT, STATUS_BAD_REQUEST,
  STATUS_INTERNAL_SERVER_ERROR,
  STATUS_OK, STATUS_UNAUTHORIZED
} from '../Config/Remote'

const instance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: REQUEST_TIME_OUT,
  headers: {}
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
  setHeaderToken: (accessToken) => {
    instance.defaults.headers.common.Authorization = accessToken
  },
  auth: {
    login: (data) => {
      const path = '/auth/login'
      return POST(path, data, {})
    },
    register: (data) => {
      const path = '/auth/register'
      return POST(path, data, {})
    },
    validateToken: () => {
      const path = '/auth/token/validate'
      return GET(path)
    },
    logout: () => {
      const path = '/auth/logout'
      return POST(path)
    }
  },
  board: {
    getListBoard: (id) => {
      const path = '/board/user/' + id
      return GET(path)
    },
    createBoard: (data) => {
      const path = '/board'
      return POST(path, data)
    },
    updateBoard: (id, data) => {
      const path = '/board/' + id
      return PUT(path, data)
    },
    deleteBoard: (id) => {
      const path = '/board/' + id
      return DELETE(path)
    }
  },
  column: {
    getListColumn: (id) => {
      const path = '/column/board/' + id
      return GET(path)
    },
    createColumn: (data) => {
      const path = '/column'
      return POST(path, data)
    },
    updateColumn: (id, data) => {
      const path = '/column/' + id
      return PUT(path, data)
    },
    deleteColumn: (id) => {
      const path = '/column/' + id
      return DELETE(path)
    }
  },
  card: {
    createCard: (data) => {
      const path = '/card'
      return POST(path, data)
    },
    updateCard: (id, data) => {
      const path = '/card/' + id
      return PUT(path, data)
    },
    deleteCard: (id) => {
      const path = '/card/' + id
      return DELETE(path)
    }
  }
}

export default API
