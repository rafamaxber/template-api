import cors from 'cors'
import express from 'express'
import {
  HOST,
  PORT
} from './vars'

const app = express()

app
  .disable('x-powered-by')
  .use(cors())
  .use(express.json())
  .use(
    express.urlencoded({
      extended: true
    })
  )
  .listen(PORT, () => {
    console.log(`Listenin on ${HOST}:${PORT}`)
  })

export default app
