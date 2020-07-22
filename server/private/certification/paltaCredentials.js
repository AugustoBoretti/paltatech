const fs = require("fs");

const key = fs.readFileSync(
  "/etc/letsencrypt/live/palta.tech/privkey.pem",
  "utf8"
);

const cert = fs.readFileSync(
  "/etc/letsencrypt/live/palta.tech/cert.pem",
  "utf8"
);

const ca = fs.readFileSync(
  "/etc/letsencrypt/live/palta.tech/chain.pem",
  "utf8"
);

module.exports = {
  key,
  cert,
  ca,
};
