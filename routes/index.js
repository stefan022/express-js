const homeRoutes = require("./home.routes");
const userRoutes = require("./user.routes");
const notFoundRoutes = require("./404.routes");

module.exports = (app) => {
	app.use("/", homeRoutes);
	app.use("/users", userRoutes);
	app.use("*", notFoundRoutes);
};
