const { default: mongoose } = require("mongoose");
const commentModel = require("../models/commentModel");

//! Comment create
exports.createComment = async (req, res) => {
  try {
    let { name, blogID, email, comment } = req.body;
    blogID = new mongoose.Types.ObjectId(req.params.id);

    let data = await commentModel.create({
      blogID,
      name,
      email,
      comment,
    });

    res.status(200).json({
      success: true,
      message: "Comment created successfully",
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

//! Comment Get All
exports.allComment = async (req, res) => {
  try {
    let data = await commentModel.find();
    res.status(200).json({
      success: true,
      message: "Comment fetched successfully",
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

//! Comment Get Single
exports.singleComment = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await commentModel.findById(id);
    res.status(200).json({
      success: true,
      message: "Comment fetched successfully",
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

//! Comment update single
exports.updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, comment } = req.body;

    let data = await commentModel.findByIdAndUpdate(
      id,
      { name, email, comment },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Comment updated successfully",
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

//! Comment delete single
exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await commentModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
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
