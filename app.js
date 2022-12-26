const express = require("express");
const cors = require("cors");

const app = express();
const users = [];
app.use(cors());

app.use("/add-user", (req, res, next) => {
  users.push(req.user);

  res.send({ users: users });
});

app.listen(5000);
