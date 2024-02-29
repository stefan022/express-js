const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	db: process.env.DB,
	dialect: process.env.DB_DIALECT,
	port: process.env.DB_PORT,
};
