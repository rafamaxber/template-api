'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* TODO:
  * /cadastro
  * /me
  * /login
  * /recupera senha
  */

var Login = function () {
  function Login(expressInstance) {
    _classCallCheck(this, Login);

    this._app = expressInstance;
    return this.init();
  }

  _createClass(Login, [{
    key: 'init',
    value: function init() {
      return {
        list: this.list()
      };
    }
  }, {
    key: 'list',
    value: function list() {
      this._app.get('/login', function (res, req) {
        return req.send('Login aqui :D');
      });
    }
  }]);

  return Login;
}();

exports.default = Login;
/*
module.exports = app => {
  const { check, validationResult } = require("express-validator/check");
  app.get('/login', (req, res) => {
    res.sens('oeeee')
  })
  app.post(
    "/login",
    [
      check("email").isEmail(),
      check("password").isLength({
        min: 5
      })
    ],
    (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: "Invalid values mesmo"
        });
      }
      /*
    User.login({
      email,
      password,
    })
    */
/*
   return res.status(200).json(req.body);
 }
);
};
*/