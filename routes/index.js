const homeRoutes = require("./home.routes");
const registerRoutes = require("./register.routes");
const loginRoutes = require("./login.routes");
const refreshRoutes = require("./refresh.routes");
const logoutRoutes = require("./logout.routes");
const userRoutes = require("./user.routes");
const articleRoutes = require("./article.routes");
const notFoundRoutes = require("./404.routes");

const jwtVerify = require("../jwt");

module.exports = (app) => {
	app.use("/", homeRoutes);
	app.use("/register", registerRoutes);
	app.use("/login", loginRoutes);
	app.use("/refresh", refreshRoutes);
	app.use("/logout", logoutRoutes);
	app.use("/users", jwtVerify, userRoutes);
	app.use("/articles", jwtVerify, articleRoutes);
	app.use("*", notFoundRoutes);
};
