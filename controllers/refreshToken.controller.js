const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Role = require("../models/Role");

dotenv.config();

const refreshToken = async (req, res) => {
	const cookies = req.cookies;
	const usr_id = req.query.usr_id;

	if (!cookies?.jwt) {
		return res.sendStatus(401);
	}

	const refresh_token = cookies.jwt;

	const checkUser = await User.findOne({
		where: { usr_id },
	});

	if (!checkUser) {
		return res.sendStatus(403);
	}

	const { rol_token } = await Role.findOne({
		where: { rol_id: checkUser.rol_id },
	});

	jwt.verify(
		refresh_token,
		process.env.REFRESH_TOKEN_SECRET,
		(err, decoded) => {
			if (err || checkUser.usr_username !== decoded.username) {
				return res.send(403);
			}

			const accessToken = jwt.sign(
				{
					info: {
						username: decoded.username,
						role: decoded.role,
					},
				},
				process.env.ACCESS_TOKEN_SECRET,
				{ expiresIn: "30m" }
			);

			res.send({
				msg: "success",
				token: accessToken,
				role: rol_token,
			});
		}
	);
};

module.exports = { refreshToken };
