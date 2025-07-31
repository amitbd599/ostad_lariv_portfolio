const ServiceModel = require("../models/ServiceModel");

//! Service create
exports.createService = async (req, res) => {
  try {
    const { title, img, description } = req.body;

    let data = await ServiceModel.create({
      title,
      img,
      description,
    });
    res.status(200).json({
      success: true,
      message: "Service created successfully",
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

//! Service Get All
exports.allService = async (req, res) => {
  try {
    let data = await ServiceModel.find();
    res.status(200).json({
      success: true,
      message: "Service fetched successfully",
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

//! Service Get Single

exports.singleService = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await ServiceModel.findById(id);
    res.status(200).json({
      success: true,
      message: "Service fetched successfully",
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

//! Service update single
exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, img, description } = req.body;

    let data = await ServiceModel.findByIdAndUpdate(
      id,
      { title, img, description },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Service updated successfully",
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

//! Service delete single
exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await ServiceModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
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
