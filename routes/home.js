const express = require("express");

const router = express.Router();

const usersController = require("../Controllers/user");
router.post("/", usersController.addUser);

module.exports = router;
