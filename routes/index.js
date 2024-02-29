const homeRoutes = require("./home.routes");
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const articleRoutes = require("./article.routes");
const notFoundRoutes = require("./404.routes");

const jwtVerify = require("../jwt");

module.exports = (app) => {
	app.use("/", homeRoutes);
	app.use("/api/v1/auth", authRoutes);
	app.use("/api/v1/users", jwtVerify, userRoutes);
	app.use("/api/v1/articles", jwtVerify, articleRoutes);
	app.use("*", notFoundRoutes);
};
