'use strict';

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _vars = require('./vars');

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

(0, _routes2.default)(app);

app.get('/', function (res, req) {
  req.send('Hello');
});

app.disable("x-powered-by");
app.use((0, _cors2.default)());
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({
  extended: true
}));

app.listen(_vars.PORT, function () {
  console.log('Listenin on ' + _vars.HOST + ':' + _vars.PORT);
});