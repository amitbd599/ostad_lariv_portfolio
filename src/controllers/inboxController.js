const advantageModel = require("../models/advantageModel");

//! Advantage create
exports.createAdvantage = async (req, res) => {
  try {
    const { title, category, percent, time } = req.body;

    let data = await advantageModel.create({
      title,
      category,
      percent,
      time,
    });
    res.status(200).json({
      success: true,
      message: "Advantage created successfully",
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

//! Advantage Get All
exports.allAdvantage = async (req, res) => {
  try {
    let data = await advantageModel.find();
    res.status(200).json({
      success: true,
      message: "Advantage fetched successfully",
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

//! Advantage Get Single
exports.singleAdvantage = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await advantageModel.findById(id);
    res.status(200).json({
      success: true,
      message: "Advantage fetched successfully",
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

//! Advantage update single
exports.updateAdvantage = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category, percent, time } = req.body;

    let data = await advantageModel.findByIdAndUpdate(
      id,
      { title, category, percent, time },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Advantage updated successfully",
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

//! Advantage delete single
exports.deleteAdvantage = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await advantageModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Advantage deleted successfully",
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
