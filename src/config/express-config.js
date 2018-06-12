import cors from 'cors'
import express from 'express'
import { HOST, PORT } from "./vars"
import Routes from '../routes'

const app = express()

Routes(app)

app.get('/', (res, req) => {
  req.send('Hello')
})

app.disable("x-powered-by");
app.use(cors());
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.listen(PORT, () => {
  console.log(`Listenin on ${HOST}:${PORT}`)
})
