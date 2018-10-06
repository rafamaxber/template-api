'use strict';

var path = require('path');
var result = require('dotenv').config({
  path: path.resolve(process.cwd(), '../.env')
});

if (result.error) {
  require('dotenv').config();
}