const bcrypt = require('bcrypt');
const { BadRequestError } = require("../exception-handling/CustomErrors");
const User = require('../models/user.model');
const { generateToken } = require('../utils/JwtUtils');

exports.login = async (username, password) => {
  if (!username || !password) {
    throw new BadRequestError('Credentials not provided');
  }

  const user = await User.findOne({ username });
  if (!user) {
    throw new BadRequestError('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new BadRequestError('Invalid credentials');
  }

  const token = generateToken(user);
  return token;
}