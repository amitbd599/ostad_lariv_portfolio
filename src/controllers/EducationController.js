const educationModel = require("../models/educationModel");

//! Education create
exports.createEducation = async (req, res) => {
  try {
    const { title, institute, description, time } = req.body;

    let data = await educationModel.create({
      title,
      institute,
      description,
      time,
    });
    res.status(200).json({
      success: true,
      message: "Education created successfully",
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

//! Education Get All
exports.allEducation = async (req, res) => {
  try {
    let data = await educationModel.find();
    res.status(200).json({
      success: true,
      message: "Education fetched successfully",
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

//! Education Get Single
exports.singleEducation = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await educationModel.findById(id);
    res.status(200).json({
      success: true,
      message: "Education fetched successfully",
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

//! Education update single
exports.updateEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, institute, description, time } = req.body;

    let data = await educationModel.findByIdAndUpdate(
      id,
      { title, institute, description, time },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Education updated successfully",
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

    let data = await educationModel.findByIdAndDelete(id);
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
