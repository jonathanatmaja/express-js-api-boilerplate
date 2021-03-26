"use strict";

const { users } = require("../components/database");
const response = require("../components/response");
const Crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");
const axios = require("axios");
const url = process.env.FUSIONAUTH_URL;

exports.login = function (req, res) {
  const request = {
    applicationId: req.body.applicationId,
    loginId: req.body.loginId,
    metaData: {
      device: {
        description: req.body.metaData.device.description,
        name: req.body.metaData.device.name,
        type: req.body.metaData.device.type,
      },
    },
    password: req.body.password,
  };

  axios
    .post(url + "login", request)
    .then((data) => {
      response.res200(res, data.data);
    })
    .catch((error) => {
      if (error.response.status === 404) {
        response.res401(res, "Invalid credentials");
      } else {
        response.res500(res);
      }
    });
};