'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login(instance) {
  return (0, _routes2.default)(instance);
}; /* TODO:
    * /cadastro
    * /me
    * /login
    * /recupera senha
    */

exports.default = Login;
/*
module.exports = app => {
  const { check, validationResult } = require('express-validator/check');
  app.get('/login', (req, res) => {
    res.sens('oeeee')
  })
  app.post(
    '/login',
    [
      check('email').isEmail(),
      check('password').isLength({
        min: 5
      })
    ],
    (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: 'Invalid values mesmo'
        });
      }
      /*
    User.login({
      email,
      password,
    })
    */
/*
      return res.status(200).json(req.body);
    }
  );
};
*/