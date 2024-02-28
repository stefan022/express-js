const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const Role = sequelize.define(
	"role",
	{
		rol_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		rol_token: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
	},
	{
		tableName: "roles",
		timestamps: false,
	}
);

module.exports = Role;
