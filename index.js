const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

//import middleware verify token
const verifyToken = require("./verifyToken");

app.use(express.json());

//authenticate client
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    jwt.sign({ username: "admin" }, "randomStuff", function(err, token) {
      res.send({ success: true, token });
    });
  } else {
    res.send({ success: false });
  }
});

//implement middleware verify token
app.get("/", verifyToken, (req, res) => {
  res.json(req.user);
});

app.listen(3000, function() {
  console.log("Server listening on localhost:3000");
});
