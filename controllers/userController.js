const userModel = require("../database/models/user");

async function createUser(params) {
  const userData = new userModel(params);
  const checkUser = await userModel.findOne(params);

  if (checkUser && checkUser.id) {
    return false;
  }

  const user = await userModel.create(userData);
  return user;
}

async function deleteUser(id) {
  const remove = await userModel.findOneAndDelete({ id: id });
  return remove;
}

module.exports = {
  createUser,
  deleteUser
};
