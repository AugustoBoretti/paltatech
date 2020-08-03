const path = require("path");
const http = require("http");
const https = require("https");
const express = require("express");
const app = express();
const emailRoutes = require("./src/routes/emailRoute");
const credentials = require("./private/certification/credentials");

app.use("/static", express.static(path.join(__dirname, "..", "build/static")));
app.use(
  "/michroma/static",
  express.static(path.join(__dirname, "pages/michroma/static"))
);
app.use(
  "/michroma/press/static",
  express.static(path.join(__dirname, "pages/michroma/press/static"))
);
app.use(
  "/.well-known/acme-challenge",
  express.static(path.join(__dirname, ".well-known/acme-challenge"))
);
app.use("/email", emailRoutes);
app.get("*", function (req, res) {
  switch (req.headers.host) {
    case "michroma.co": {
      if (req.url === "/press") {
        return res.sendFile("index.html", {
          root: path.join(__dirname, "pages/michroma/press"),
        });
      }

      return res.sendFile("index.html", {
        root: path.join(__dirname, "pages/michroma"),
      });
    }
  }

  res.sendFile("index.html", {
    root: path.join(__dirname, "..", "build"),
  });
});
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
