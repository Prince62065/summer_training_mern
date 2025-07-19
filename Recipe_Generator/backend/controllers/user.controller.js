const { BadRequestError } = require('../exception-handling/CustomErrors');
const { createUser, getUserById } = require('../services/user.service');

exports.createUser = async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    return res.status(201).json({ message: 'User created', newUser });
  } catch (error) {
    if (error instanceof BadRequestError) {
      return res.status(400).json(error.message);
    }
  }
};

exports.getUser = async (req, res) => {
  const user = await getUserById(req.userId);
  return res.status(200).json({ message: 'User information', user });
}