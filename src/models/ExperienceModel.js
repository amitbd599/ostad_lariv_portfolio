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

const ExperienceModel = mongoose.model("experiences", DataSchema);

module.exports = ExperienceModel;
