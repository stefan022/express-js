const dbConfig = require("../config/db.config");
const { Sequelize } = require("sequelize");
const dialectModule = require("mysql2");

const sequelize = new Sequelize({
	dialect: dbConfig.dialect,
	host: dbConfig.host,
	username: dbConfig.user,
	password: dbConfig.password,
	database: dbConfig.db,
	port: dbConfig.port,
	dialectModule,
});

const connectToDb = async () => {
	try {
		await sequelize.authenticate();
		console.log("Successfully connected to DB");
		await sequelize.sync();
	} catch (error) {
		console.log(error);
	}
};

module.exports = { sequelize, connectToDb };
