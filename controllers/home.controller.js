import path from "path";
const __dirname = import.meta.dirname; // node -v 20.11

const homeController = (req, res) => {
	return res.sendFile(path.join(__dirname, "..", "views", "index.html"));
};

export default homeController;
