const dbConfig = require("../config/db.config");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
	host: dbConfig.host,
	dialect: dbConfig.dialect,
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
