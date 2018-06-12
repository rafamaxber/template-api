/* TODO:
  * /cadastro
  * /me
  * /login
  * /recupera senha
  */

class Login {
  constructor(expressInstance) {
    this._app = expressInstance
    return this.init()
  }

  init() {
    return {
      list: this.list()
    }
  }

  list() {
    this._app.get('/login', (res, req) => {
      return req.send('Login aqui :D')
    })
  }
}

export default Login
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
