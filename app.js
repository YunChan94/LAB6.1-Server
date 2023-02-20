const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

app.use(cors());
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//Page not found
app.use(errorController.get404);

app.listen(5000);
