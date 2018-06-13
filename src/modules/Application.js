import Authentication from './Authentication'

const Application = (app) => ({
  Authentication: Authentication(app)
})

export default Application
