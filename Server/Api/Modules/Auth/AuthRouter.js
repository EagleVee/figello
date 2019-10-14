import Express from 'express'
const Router = Express.Router()
const service = require('./auth.service')

Router.post('/register', async function (req, res) {
  try {
    const data = await service.register(req.body)
    res.status(200).send(data)
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
})

Router.post('/login', async function (req, res) {
  try {
    const data = await service.login(req.body)
    res.status(200).send(data)
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
})

export default Router
