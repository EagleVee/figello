import Express from 'express'
import BodyParser from 'body-parser'
import { PORT } from './Config'
import UserRouter from './Api/Modules/User/UserRouter'
import AuthRouter from './Api/Modules/Auth/AuthRouter'

const app = Express()

app.use(BodyParser.urlencoded())
app.use(BodyParser.json())
app.use('/user', UserRouter)
app.use('/auth', AuthRouter)

const server = app.listen(PORT, function () {
  console.log(`Server run at localhost:${PORT}`)
})

export default app
