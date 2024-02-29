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
	app.use("/api/v1/register", registerRoutes);
	app.use("/api/v1/login", loginRoutes);
	app.use("/api/v1/refresh", refreshRoutes);
	app.use("/api/v1/logout", logoutRoutes);
	app.use("/api/v1/users", jwtVerify, userRoutes);
	app.use("/api/v1/articles", jwtVerify, articleRoutes);
	app.use("*", notFoundRoutes);
};
