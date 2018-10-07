'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressConfig = require('./config/express-config');

var _expressConfig2 = _interopRequireDefault(_expressConfig);

var _modules = require('./modules');

var ApplicationModules = _interopRequireWildcard(_modules);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.keys(ApplicationModules).forEach(function (module) {
  var router = ApplicationModules[module];
  router && _expressConfig2.default.use(router);
});

exports.default = _expressConfig2.default;