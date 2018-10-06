'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _check = require('express-validator/check');

var _controllers = require('../controllers');

var MIN_PASSWORD = 8;

var Routes = function Routes(instance) {
  instance.get('/login', _controllers.helthz).post('/login', [(0, _check.check)('email').isEmail(), (0, _check.check)('password').isLength({
    min: MIN_PASSWORD
  })], _controllers.loginValidate);
};

exports.default = Routes;