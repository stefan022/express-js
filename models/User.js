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
		usr_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "users",
		timestamps: false,
	}
);

module.exports = User;
