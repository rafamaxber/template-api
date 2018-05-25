const Login = require("./Login");

class Autentication {
  constructor(app, configLogin) {
    this._app = app;
    this._configLogin = configLogin;
  }

  login() {
    return Login({ app: this._app, configLogin: this._configLogin });
  }
}

module.exports = Autentication;
