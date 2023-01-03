const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const homeRoutes = require("./routes/home");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", homeRoutes);

app.listen(5000);
