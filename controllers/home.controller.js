const path = require("path");

const homeController = (req, res) => {
	res.sendFile(path.join(__dirname, "..", "views", "index.html"));
};

module.exports = homeController;
