const mongoose = require("mongoose");
const OTPSchema = mongoose.Schema(
  {
    filename: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const FileModel = mongoose.model("files", OTPSchema);
module.exports = FileModel;
