const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/email/index");
const response = require("../models/response");
const emailValidator = require("../middlewares/emailValidator");

router.post("/", emailValidator, async ({ body }, res, next) => {
  sendEmail(body)
    .catch(() => {
      response.status = false;
      response.code = 500;
    })
    .finally(() => {
      res.status(response.code).json({ status: response.status });
    });
});

module.exports = router;
