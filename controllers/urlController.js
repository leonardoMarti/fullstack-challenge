const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const urlModel = require("../database/models/url");
const userModel = require("../database/models/user");

async function getUrlById(id) {
  const param = new ObjectId(id);
  const url = await urlModel.findById(param);
  return url;
}

async function deleteUrl(id) {
  const remove = await urlModel.findOneAndDelete({ _id: id });
  return remove;
}

async function createUrl(params, userId) {
  const checkUser = await userModel.findOne({ id: userId });

  if (!checkUser) {
    return false;
  }

  const urlParams = {
    url: params.url,
    userId: userId
  };

  const urlData = new urlModel(urlParams);
  const url = await urlModel.create(urlData);
  return url;
}

async function hitUrl(id) {
  const url = await urlModel.findOne({ _id: id });
  url.hits = url.hits + 1;
  await url.save();

  return;
}

module.exports = {
  getUrlById,
  deleteUrl,
  createUrl,
  hitUrl
};
