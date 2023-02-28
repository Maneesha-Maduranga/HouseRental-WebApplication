const customError = require("../utils/customError");
const { User } = require("../models/User");

const getallUser = async (req, res) => {
  const user = await User.find({});

  res.status(200).json({
    sucess: true,
    data: user,
  });
};

const getsingleUser = async (req, res) => {
  let id = req.params.id;

  const user = await User.findById(id);

  if (!user) {
    throw new customError("No user with Given Id", 404);
  }

  res.status(200).json({
    sucess: true,
    data: user,
  });
};

const deleteUser = async (req, res) => {
  let id = req.params.id;

  let user = await User.findById(id);

  if (!user) {
    throw new customError("No User With Given Id", 404);
  }

  await User.findByIdAndRemove(id);

  res.status(200).json({
    sucess: true,
    data: {},
  });
};

module.exports = {
  getallUser,
  getsingleUser,
  deleteUser,
};
