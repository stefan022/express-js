const express = require("express");
const { logout } = require("../controllers/logout.controller");

const router = express.Router();

router.get("/", logout);

module.exports = router;
