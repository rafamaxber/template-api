import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

const app = express()

app
  .use(helmet())
  .use(cors())
  .use(express.json())
  .use(
    express.urlencoded({
      extended: true
    })
  )

export default app
