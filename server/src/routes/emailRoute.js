const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/email/index");
const response = require("../models/response");

router.get("/", async (req, res, next) => {
  try {
    await sendEmail();
  } catch (e) {
    response.status = false;
    response.code = 500;
  } finally {
    await res.status(response.code).json({ status: response.status });
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log(123);
  } catch (e) {
    response.status = false;
    response.code = 500;
  } finally {
    await res.status(response.code).json({ status: response.status });
  }
});

module.exports = router;
