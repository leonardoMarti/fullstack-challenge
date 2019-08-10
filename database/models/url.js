const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  hits: { type: Number, default: 0 },
  url: { type: String },
  shortUrl: { type: String },
  userId: { type: String, ref: "user" }
});

const url = mongoose.model("url", schema);

module.exports = url;
