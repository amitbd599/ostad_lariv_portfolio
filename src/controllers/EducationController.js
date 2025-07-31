const EducationModel = require("../models/EducationModel");

//! Education create
exports.createEducation = async (req, res) => {
  try {
    const { title, institute, description, time } = req.body;

    let data = await EducationModel.create({
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
    let data = await EducationModel.find();
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

    let data = await EducationModel.findById(id);
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

    let data = await EducationModel.findByIdAndUpdate(
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
