const homeRoutes = require("./home.routes");
const userRoutes = require("./user.routes");
const loginRoutes = require("./login.routes");
const registerRoutes = require("./register.routes");
const notFoundRoutes = require("./404.routes");

module.exports = (app) => {
	app.use("/", homeRoutes);
	app.use("/users", userRoutes);
	app.use("/login", loginRoutes);
	app.use("/register", registerRoutes);
	app.use("*", notFoundRoutes);
};
