const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    category: { type: String },
    percent: { type: Number },
    time: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AdvantageModel = mongoose.model("advantages", DataSchema);

module.exports = AdvantageModel;
