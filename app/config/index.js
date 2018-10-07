'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressConfig = require('./express-config');

var _expressConfig2 = _interopRequireDefault(_expressConfig);

var _Application = require('../modules/Application');

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _Application2.default)(_expressConfig2.default);