const express = require("express");
const notFoundController = require("../controllers/404.controller");

const router = express.Router();

router.get("*", notFoundController);

module.exports = router;
