const jwt = require("jsonwebtoken");
const config = require("./config");
require("dotenv").config();

const checkToken = (req, res, next) => {
  var bearerHeader = req.headers.authorization;

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, process.env.SECRET_KEY, (err, result) => {
      if (err) {
        res.sendStatus(403);
      } else {
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
};

module.exports = {
  checkToken: checkToken
};
