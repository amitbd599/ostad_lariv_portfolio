const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: { type: String },
    website: { type: Number },
    message: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const inboxModel = mongoose.model("inbox", DataSchema);

module.exports = inboxModel;
