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

module.exports = {
  getUrls,
  getUrlById
};
