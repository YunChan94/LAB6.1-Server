const express = require("express");

const router = express.Router();

const usersController = require("../Controllers/user");
router.post("/", usersController.addUser);

router.get("/users", usersController.getUser);
module.exports = router;
