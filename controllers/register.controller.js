const bcrypt = require("bcrypt");
const User = require("../models/User");

const register = async (req, res) => {
	const { username, password } = req.body;

	if (!username || !password) {
		return res.status(400).send({
			err: "Username and password are required",
		});
	}

	const checkUser = await User.findOne({
		where: { usr_username: username },
	});

	if (checkUser) {
		return res.status(401).send({
			err: "Username already exists",
		});
	}

	try {
		const hashPassword = await bcrypt.hash(password, 10);

		await User.create({
			usr_username: username,
			usr_password: hashPassword,
		});

		return res.send({
			msg: "success",
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

module.exports = { register };
