const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const urlModel = require("../database/models/url");
const userModel = require("../database/models/user");

async function getUrlById(id) {
  const param = new ObjectId(id);
  const url = await urlModel.findById(param);
  return url;
}

async function getUrlByShortUrl(shortUrl) {
  const url = await urlModel.findOne({ shortUrl: shortUrl });
  return url;
}

async function deleteUrl(id) {
  const remove = await urlModel.findOneAndDelete({ _id: id });
  return remove;
}

function makeShortUrl(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

async function createUrl(params, userId, serverUrl) {
  const checkUser = await userModel.findOne({ id: userId });

  if (!checkUser) {
    return false;
  }

  const random = makeShortUrl(5);

  const urlParams = {
    url: params.url,
    userId: userId,
    shortUrl: serverUrl + "/" + random
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
  hitUrl,
  getUrlByShortUrl
};
