import Express from 'express'
import Service from './AuthService'
const Router = Express.Router()

Router.post('/register', async function (req, res) {
  try {
    const data = await Service.register(req.body)
    res.status(200).send(data)
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
})

Router.post('/login', async function (req, res) {
  try {
    const data = await Service.login(req.body)
    res.status(200).send(data)
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
})

export default Router
