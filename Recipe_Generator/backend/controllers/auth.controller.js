const { BadRequestError } = require("../exception-handling/CustomErrors");
const { login } = require("../services/auth.service")

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await login(username, password);
    return res.status(200).json({ message: 'Successfully logged in', token });
  } catch (error) {
    if (error instanceof BadRequestError) {
      return res.status(400).json({error: "Bad Request",
        message: error.message});
    }

    return res.status(500).json(error.message);
  }
}