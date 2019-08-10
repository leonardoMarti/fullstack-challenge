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

module.exports = {
  createUser
};
