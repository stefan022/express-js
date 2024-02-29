const express = require("express");
const {
	register,
	login,
	logout,
	refreshToken,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/refresh-token", refreshToken);

module.exports = router;
