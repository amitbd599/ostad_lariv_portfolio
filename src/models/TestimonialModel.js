const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
    },
    address: { type: String },
    img: { type: String },
    feedback: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const testimonialModel = mongoose.model("testimonials", DataSchema);

module.exports = testimonialModel;
