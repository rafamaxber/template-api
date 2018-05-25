/* TODO:
  * /cadastro
  * /me
  * /login
  * /recupera senha
  */
const { Autentication } = require("../modules/Autentication");

module.exports = app => {
  const auth = new Autentication(app);
  auth.login();
};
