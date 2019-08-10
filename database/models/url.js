const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
  hits: { type: Number },
  url: { type: String },
  shortUrl: { type: String }
});

const url = mongoose.model("url", schema);

module.exports = url;
