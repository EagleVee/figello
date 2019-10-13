import Express from 'express'
import BodyParser from 'body-parser'
import { PORT } from './Config'

const app = Express()

app.use(BodyParser.urlencoded())
app.use(BodyParser.json())

const server = app.listen(PORT, function () {
  console.log(`Server run at localhost:${PORT}`)
})

export default app
