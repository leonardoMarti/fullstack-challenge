const urlModel = require("../database/models/url");

async function getStats() {
  const urls = await urlModel.find();
  let hits = 0;
  const topUrls = await urlModel
    .find()
    .sort({ hits: -1 })
    .limit(10);

  urls.forEach(url => {
    hits = hits + url.hits;
  });

  return {
    hits,
    urlCount: urls.length,
    topUrls
  };
}

async function getUserStats(userId) {
  const urls = await urlModel.find({ userId: userId });
  let hits = 0;
  const topUrls = await urlModel
    .find({ userId: userId })
    .sort({ hits: -1 })
    .limit(10);

  urls.forEach(url => {
    hits = hits + url.hits;
  });

  return {
    hits,
    urlCount: urls.length,
    topUrls
  };
}

module.exports = {
  getStats,
  getUserStats
};
