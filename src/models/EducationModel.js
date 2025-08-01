const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    institute: { type: String },
    description: { type: String },
    time: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const educationModel = mongoose.model("educations", DataSchema);

module.exports = educationModel;
