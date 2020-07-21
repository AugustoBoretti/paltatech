const path = require("path");
const http = require("http");
const https = require("https");
const express = require("express");
const app = express();
const michromaApp = express();
const credentials = require("./private/certification/siteCredentials");
const emailRoutes = require("./src/routes/emailRoute");
const michromaRoutes = require("./src/routes/michromaRoute");

// add middlewares

app.use("/static", express.static(path.join(__dirname, "..", "build/static")));
app.use("/email", emailRoutes);
app.get("*", function (req, res) {
  res.sendFile("index.html", {
    root: path.join(__dirname, "..", "build"),
  });
});
app.use(express.static("public"));
app.use(express.static(__dirname, { dotfiles: "allow" }));

michromaApp.use(
    "/michroma/static",
    express.static(path.join(__dirname, "pages/michroma/static"))
);
michromaApp.use(
    "/michroma/press/static",
    express.static(path.join(__dirname, "pages/michroma/press/static"))
);
michromaApp.use("/", michromaRoutes);

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);
const michromaHttpServer = http.createServer(michromaApp);
const michromaHttpsServer = https.createServer(michromaApp, app);

httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80 🚀");
});

httpsServer.listen(443, () => {
  console.log("HTTPS Server running on port 443 🚀");
});

michromaHttpServer.listen(8081, () => {
  console.log("HTTP Server running on port 80 🚀");
});

michromaHttpsServer.listen(8082, () => {
  console.log("HTTP Server running on port 80 🚀");
});
