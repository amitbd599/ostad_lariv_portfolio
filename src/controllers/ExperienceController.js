const ExperienceModel = require("../models/ExperienceModel");

//! Experience create
exports.createExperience = async (req, res) => {
  try {
    const { title, company, description, time } = req.body;

    let data = await ExperienceModel.create({
      title,
      company,
      description,
      time,
    });
    res.status(200).json({
      success: true,
      message: "Experience created successfully",
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

//! Experience Get All
exports.allExperience = async (req, res) => {
  try {
    let data = await ExperienceModel.find();
    res.status(200).json({
      success: true,
      message: "Experience created successfully",
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

//! Experience Get Single
exports.singleExperience = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await ExperienceModel.findById(id);
    res.status(200).json({
      success: true,
      message: "Experience fetched successfully",
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

//! Experience update single
exports.updateExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, company, description, time } = req.body;

    let data = await ExperienceModel.findByIdAndUpdate(
      id,
      { title, company, description, time },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Experience updated successfully",
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

//! Experience delete single
exports.deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await ExperienceModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Experience deleted successfully",
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
