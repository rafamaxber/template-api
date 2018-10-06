'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginValidate = exports.helthz = undefined;

var _check = require('express-validator/check');

var helthz = function helthz(req, res) {
  return res.send('Hello Module :D');
};

var loginValidate = function loginValidate(req, res) {
  var errors = (0, _check.validationResult)(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: 'Invalid'
    });
  }
  return res.status(200).json(req.body);
};

exports.helthz = helthz;
exports.loginValidate = loginValidate;