const express = require("express");
const {
	getUsers,
	getSingleUser,
	updateUser,
	deleteUser,
} = require("../controllers/user.controller");
const verifyRole = require("../utils/verifyRole");

const router = express.Router();

router.get("/", verifyRole, getUsers);
router.get("/:id", verifyRole, getSingleUser);
router.put("/:id", verifyRole, updateUser);
router.delete("/:id", verifyRole, deleteUser);

module.exports = router;
