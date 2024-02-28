const express = require("express");
const {
	getUsers,
	getSingleUser,
	updateUser,
	deleteUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getSingleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
