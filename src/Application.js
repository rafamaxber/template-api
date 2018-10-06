import Application from './config/express-config'
import * as ApplicationModules from './modules'

Object.keys(ApplicationModules).forEach(module => {
  const router = ApplicationModules[module]
  router && Application.use(router)
})

export default Application
