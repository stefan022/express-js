import path from "path";
const __dirname = import.meta.dirname; // node -v 20.11

const notFoundController = (req, res) => {
	return res.sendFile(path.join(__dirname, "..", "views", "404.html"));
};

export default notFoundController;
