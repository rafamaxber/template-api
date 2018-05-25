const { check, validationResult } = require("express-validator/check");
const defaultConfig = {
  path: '/login',
}
module.exports = ({ app, configLogin }) => {
  const config = Object.assign({}, defaultConfig, configLogin);
  return app.post(
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
