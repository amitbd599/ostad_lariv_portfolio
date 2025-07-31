const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    img: { type: String },
    link: { type: String },
    category: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const PortfolioModel = mongoose.model("portfolios", DataSchema);

module.exports = PortfolioModel;
