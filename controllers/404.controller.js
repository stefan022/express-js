const path = require("path");

const notFoundController = (req, res) => {
	return res.sendFile(path.join(__dirname, "..", "views", "404.html"));
};

module.exports = notFoundController;
