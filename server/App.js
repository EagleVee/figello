import Express from 'express'
import BodyParser from 'body-parser'
import mongoose from 'mongoose'
import { PORT, MONGO_CONNECTION_STRING } from './Config'
import UserRouter from './Api/Modules/User/UserRouter'
import AuthRouter from './Api/Modules/Auth/AuthRouter'

mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true })

const app = Express()

app.use(BodyParser.urlencoded())
app.use(BodyParser.json())
app.use('/api/user', UserRouter)
app.use('/api/auth', AuthRouter)
app.use(Express.static('../client/public'))

const server = app.listen(PORT, function () {
  console.log(`Server run at localhost:${PORT}`)
})

export default app
