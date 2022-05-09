const express = require("express");
const { showUser } = require("../Controllers/userController");

const router = express.Router();

router.get("/library", showUser);

module.exports = router;
