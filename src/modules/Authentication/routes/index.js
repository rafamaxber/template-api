import { check } from 'express-validator/check'
import {
  helthz,
  loginValidate
} from '../controllers'
const MIN_PASSWORD = 8

const Routes = instance => {
  instance
    .get('/login', helthz)
    .post('/login', [
      check('email').isEmail(),
      check('password').isLength({
        min: MIN_PASSWORD
      })
    ], loginValidate)
}

export default Routes
