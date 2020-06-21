const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(express.static(__dirname, { dotfiles: "allow" }));

// start express server on port 80
app.listen(80, () => {
  console.log("server started on port 80");
});
