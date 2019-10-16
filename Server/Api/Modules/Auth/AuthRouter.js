import Express from 'express'
import Service from './AuthService'

import ResponseJSON from '../../../Config/ResponseJSON'
const Router = Express.Router()

Router.post('/register', async function (req, res) {
  try {
    const data = await Service.register(req.body)
    res.status(200).send(ResponseJSON.success(data))
  } catch (err) {
    res.status(500).send(ResponseJSON.failed(err.message))
  }
})

Router.post('/login', async function (req, res) {
  try {
    const data = await Service.login(req.body)
    res.status(200).send(ResponseJSON.success(data))
  } catch (err) {
    res.status(500).send(ResponseJSON.failed(err.message))
  }
})

Router.post('/token/refresh', async function (req, res) {
  try {
    const token = req.headers.authorization
    const data = await Service.refreshToken(token)
    res.status(200).send(ResponseJSON.success(data))
  } catch (err) {
    res.status(500).send(ResponseJSON.failed(err.message))
  }
})

export default Router
