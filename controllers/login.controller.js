const bcrypt = require("bcrypt");
const User = require("../models/User");

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

	// JWT

	return res.send({
		msg: "success",
	});
};

module.exports = { login };
