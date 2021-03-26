const apicache = require("apicache");
const cache = apicache.middleware;
const response = require("../../components/response");
const { body, param, query, validationResult } = require("express-validator");
const validator = require("../../middlewares/validator");
const express = require("express");
const router = express.Router();

const usersController = require("../../controllers/users");

const index = function (req, res, next) {
  response.res404(res);
};

router.route("/login").post(validator.postLoginValidationRules(), validator.validate, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    response.res400(res, errors.array());
  } else {
    usersController.login(req, res);
  }
});

router.all("*", index);

module.exports = router;
