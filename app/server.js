'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _terminus = require('@godaddy/terminus');

var _vars = require('./config/vars');

var _Application = require('./Application');

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = _http2.default.createServer(_Application2.default);

var options = {
  // opts
};

(0, _terminus.createTerminus)(server, options);

server.listen(_vars.PORT, function () {
  console.log('Listening on ' + _vars.HOST + ':' + _vars.PORT);
});