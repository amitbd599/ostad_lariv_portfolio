const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    company: { type: String },
    description: { type: String },
    time: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const experienceModel = mongoose.model("experiences", DataSchema);

module.exports = experienceModel;
