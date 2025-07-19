const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { isValidObjectId } = require('../utils/MongooseUtils');
const { BadRequestError } = require('../exception-handling/CustomErrors');

exports.createUser = async (userData) => {

  const existingUser = await User.find({ username: userData.username });
  console.log(existingUser);

  if (existingUser.length > 0) {
    throw new BadRequestError('Username already exists .');
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = { username: userData.username, password: hashedPassword, name: userData.name};
  const newUser = await User.insertOne(user);

  return newUser;
}

exports.getUserById = async (id) => {
  isValidObjectId(id);
  const user = await User.findById(id);
  const responseUser = { name: user.name, id: user._id, username: user.username };
  return responseUser;
}