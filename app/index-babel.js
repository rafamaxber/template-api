'use strict';

require('./config/dotenv');

require('babel-core/register');
require('babel-polyfill');

require('babel-core').transform('code', {
  comments: false
});

require('./server');