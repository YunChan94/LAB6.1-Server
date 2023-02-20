const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const homeRoutes = require("./routes/home");

app.use(cors());
app.use(bodyParser.json());
app.use("/", homeRoutes);

//Page not found
app.use((req, res, next) => {
  res.status(404).send({ message: "Route not found" });
});
app.listen(5000);
