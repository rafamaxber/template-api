const path = require('path')
const result = require('dotenv').config({
  path: path.resolve(process.cwd(), '../.env')
})

if (result.error) {
  require('dotenv').config()
}
