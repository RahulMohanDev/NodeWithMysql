const express = require("express");
const http = require("http");
const path = require("path");
const { renderAdminPage, addBooks } = require("../Controllers/adminController");
const router = express.Router();

router.get("/addBooks", renderAdminPage);

router.post("/books", addBooks);

module.exports = router;
