const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

module.exports = () => {
  const app = express();

  app.disable("x-powered-by");

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  consign({
    verbose: false
  })
    .include("services")
    .then("controller")
    .then("routes")
    .into(app);

  return app;
};
