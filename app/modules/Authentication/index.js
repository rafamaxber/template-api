'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Authentication = function Authentication(instance) {
  return (0, _routes2.default)(instance);
}; /* TODO:
    * /cadastro
    * /me
    * /login
    * /recupera senha
    */

exports.default = Authentication;