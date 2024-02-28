const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
	"user",
	{
		usr_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		usr_username: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		usr_password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		refresh_token: {
			type: DataTypes.STRING,
		},
	},
	{
		tableName: "users",
		timestamps: false,
	}
);

module.exports = User;
