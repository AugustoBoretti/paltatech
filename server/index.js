const path = require("path");
const http = require("http");
const https = require("https");
const express = require("express");
const app = express();
const credentials = require("./private/certification/siteCredentials");

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(express.static(__dirname, { dotfiles: "allow" }));

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80 🚀");
});

httpsServer.listen(443, () => {
  console.log("HTTPS Server running on port 443 🚀");
});
