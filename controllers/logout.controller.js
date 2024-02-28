const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const logout = async (req, res) => {
	const cookies = req.cookies;
	const usr_id = req.query.usr_id;

	if (!cookies?.jwt) {
		return res.send({
			msg: "ok",
		});
	}

	const checkUser = await User.findOne({
		where: { usr_id },
	});

	if (!checkUser) {
		return res.status(404).send({
			msg: "The user was not found",
		});
	}

	if (!checkUser.refresh_token) {
		req.clearCookie("jwt", {
			httpOnly: true,
			maxAge: 7 * 24 * 60 * 60 * 1000,
		});

		return res.status(200).send({
			msg: "ok",
		});
	}

	await User.update({ refresh_token: null }, { where: { usr_id } });

	res.clearCookie("jwt", { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

	return res.send({
		msg: "ok",
	});
};

module.exports = { logout };
