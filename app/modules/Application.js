'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Authentication = require('./Authentication');

var _Authentication2 = _interopRequireDefault(_Authentication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Application = function Application(app) {
  return {
    Authentication: (0, _Authentication2.default)(app)
  };
};

exports.default = Application;