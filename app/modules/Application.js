'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Application = function Application(app) {
  return {
    Login: (0, _Login2.default)(app)
  };
};

exports.default = Application;