const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const login = async (req, res) => {
	const { username, password } = req.body;

	if (!username || !password) {
		return res.status(400).send({
			err: "Username and password are required",
		});
	}

	const checkUser = await User.findOne({
		where: { usr_username: username },
	});

	if (!checkUser) {
		return res.status(404).send({
			err: "The user was not found",
		});
	}

	const checkPassword = await bcrypt.compare(
		password,
		checkUser.usr_password
	);

	if (!checkPassword) {
		return res.status(401).send({
			err: "Username or password is incorrect",
		});
	}

	const accessToken = jwt.sign(
		{ username: checkUser.usr_username },
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: "30m" }
	);

	const refreshToken = jwt.sign(
		{ username: checkUser.usr_username },
		process.env.REFRESH_TOKEN_SECRET,
		{ expiresIn: "7d" }
	);

	await User.update(
		{ refresh_token: refreshToken },
		{ where: { usr_username: username } }
	);

	res.cookie("jwt", refreshToken, {
		httpOnly: true,
		maxAge: 7 * 24 * 60 * 60 * 1000,
	});

	return res.send({
		msg: "success",
		token: accessToken,
	});
};

module.exports = { login };
