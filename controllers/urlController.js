const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const urlModel = require("../database/models/url");

function getUrls() {
  const urls = urlModel.find();
  return urls;
}

function getUrlById(id) {
  const param = new ObjectId(id);
  const url = urlModel.findById(param);
  return url;
}

async function deleteUrl(id) {
  const remove = await urlModel.findOneAndDelete({ id: id });
  return remove;
}

module.exports = {
  getUrls,
  getUrlById,
  deleteUrl
};
