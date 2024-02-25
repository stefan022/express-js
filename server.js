const express = require("express");
const routes = require("./routes");
const middlewares = require("./middlewares");
const PORT = require("./constants/port.constant");
const { connectToDb } = require("./db");

const app = express();

middlewares(app);
routes(app);

app.listen(PORT, async () => {
	console.log(`Server listening on port: http://localhost:${PORT}`);

	await connectToDb();
});
