const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    members: Array,
  },
  {
    timeStamps: true,
  }
);

const chatModel = mongoose.model("Chat",chatSchema);

module.exports = chatModel;