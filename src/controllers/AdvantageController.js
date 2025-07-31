const AdvantageModel = require("../models/AdvantageModel");

//! Advantage create
exports.createAdvantage = async (req, res) => {
  try {
    const { title, category, percent, time } = req.body;

    let data = await AdvantageModel.create({
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
    let data = await AdvantageModel.find();
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

    let data = await AdvantageModel.findById(id);
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

    let data = await AdvantageModel.findByIdAndUpdate(
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

//! Education delete single
exports.deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await EducationModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Education deleted successfully",
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
