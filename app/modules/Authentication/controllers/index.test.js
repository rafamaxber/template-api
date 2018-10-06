'use strict';

var _ = require('./');

describe('Authentication controller', function () {
  test('testando', function () {
    var req = {};
    var res = {
      send: function send(text) {
        return text;
      }
    };
    expect((0, _.helthz)(req, res)).toEqual('Hello Module :D');
  });
});