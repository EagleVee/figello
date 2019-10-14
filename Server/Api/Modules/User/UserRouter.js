import Express from 'express'
import Service from './UserService'

const Router = Express.Router()

Router.get('/', async function (req, res) {
  try {
    const data = await Service.find(req.query)
    res.status(200).send(data)
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
})

Router.get('/:id', async function (req, res) {
  try {
    const data = await Service.findById(req.params.id)
    res.status(200).send({
      data: data
    })
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
})

Router.post('/', async function (req, res) {
  try {
    const data = await Service.create(req.body)
    res.status(200).send({
      data: data
    })
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
})

Router.put('/:id', async function (req, res) {
  try {
    const data = await Service.update(req.params.id, req.body)
    res.status(200).send({
      data: data
    })
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
})

Router.delete('/:id', async function (req, res) {
  try {
    const data = await Service.find(req.params.id)
    res.status(200).send({
      data: data
    })
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
})

export default Router
