import http from 'http'
import { createTerminus } from '@godaddy/terminus'
import { HOST, PORT } from './config/vars'
import Application from './Application'

const server = http.createServer(Application)

const options = {
  // opts
}

createTerminus(server, options)

server.listen(PORT, () => {
  console.log(`Listening on ${HOST}:${PORT}`)
})
