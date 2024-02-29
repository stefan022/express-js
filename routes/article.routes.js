const express = require("express");
const {
	getArticles,
	addArticle,
	getSingleArticle,
	updateArticle,
	deleteArticle,
} = require("../controllers/article.controller");
const verifyRole = require("../utils/verifyRole");

const router = express.Router();

router.get("/", getArticles);
router.post("/", verifyRole, addArticle);
router.get("/:id", getSingleArticle);
router.put("/:id", verifyRole, updateArticle);
router.delete("/:id", verifyRole, deleteArticle);

module.exports = router;
