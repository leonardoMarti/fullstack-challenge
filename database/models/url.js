const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
  id: { type: ObjectId },
  url: { type: String }
});

const url = mongoose.model("url", schema);

module.exports = url;
