const express = require("express");
const router = express.Router();
const login = require("../controller/login.controller");

router.route("/").post(login.login);
module.exports = router;
