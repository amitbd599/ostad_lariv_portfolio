const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    blogID: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: { type: String },
    email: { type: String },
    comment: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const commentModel = mongoose.model("comments", DataSchema);

module.exports = commentModel;
