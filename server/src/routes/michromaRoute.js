const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname + "/../../pages/michroma/index.html"));
});

module.exports = router;
