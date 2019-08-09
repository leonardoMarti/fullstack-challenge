const urlModel = require("../database/models/url");

function getUrls() {
  const urls = urlModel.find();
  return urls;
}

module.exports = {
  getUrls
};
