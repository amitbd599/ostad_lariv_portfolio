const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    img: { type: String },
    category: { type: String },
    description: { type: String },
    sortDescription: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const blogModel = mongoose.model("blogs", DataSchema);

module.exports = blogModel;
