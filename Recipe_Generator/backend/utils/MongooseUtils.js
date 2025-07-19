const mongoose = require('mongoose');
const { BadRequestError } = require("../exception-handling/CustomErrors");

exports.isValidObjectId = (id) => {
  if (mongoose.Types.ObjectId.isValid(id))
    return true;

  throw new BadRequestError('Not a valid id');
}