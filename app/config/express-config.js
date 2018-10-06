'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _terminus = require('@godaddy/terminus');

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _vars = require('./vars');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var server = _http2.default.createServer(app);

var options = {
  // opts
};

(0, _terminus.createTerminus)(server, options);

app.use((0, _helmet2.default)()).use((0, _cors2.default)()).use(_express2.default.json()).use(_express2.default.urlencoded({
  extended: true
})).listen(_vars.PORT, function () {
  console.log('Listening on ' + _vars.HOST + ':' + _vars.PORT);
});

exports.default = app;