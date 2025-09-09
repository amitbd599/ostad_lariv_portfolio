const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const FileModel = require("../models/FileModel");
const ObjectId = mongoose.Types.ObjectId;
//! File upload
exports.FileUpload = async (req, res) => {
  try {
    const { filename } = req.file;
    let data = await FileModel.create({
      filename,
    });
    res.status(200).json({
      success: true,
      message: "File Uploads successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! File Remove
exports.FileRemove = async (req, res) => {
  try {
    let _id = new ObjectId(req.body._id);
    let filename = req.body?.filename;

    const filePath = path.join(__dirname, `../../uploads/${filename}`);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
      }
    });

    const data = await FileModel.deleteOne({ _id, filename });

    res.status(200).json({
      success: true,
      message: "File Remove successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! All File
exports.AllFile = async (req, res) => {
  try {
    let data = await FileModel.find();
    res.status(200).json({
      success: true,
      message: "File fetch success.",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
