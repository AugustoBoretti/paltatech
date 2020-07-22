const fs = require("fs");

const key = fs.readFileSync(
  "/etc/letsencrypt/live/michroma.co/privkey.pem",
  "utf8"
);

const cert = fs.readFileSync(
  "/etc/letsencrypt/live/michroma.co/cert.pem",
  "utf8"
);

const ca = fs.readFileSync(
  "/etc/letsencrypt/live/michroma.co/chain.pem",
  "utf8"
);

module.exports = {
  key,
  cert,
  ca,
};
