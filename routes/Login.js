/* TODO:
  * /cadastro
  * /me
  * /login
  * /recupera senha
  */

module.exports = app => {
  const { check, validationResult } = require("express-validator/check");

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
      return res.status(200).json(req.body);
    }
  );
};
