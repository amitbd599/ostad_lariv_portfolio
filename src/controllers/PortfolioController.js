const portfolioModel = require("../models/portfolioModel");

//! Portfolio create
exports.createPortfolio = async (req, res) => {
  try {
    const { title, img, link, category } = req.body;

    let data = await portfolioModel.create({
      title,
      img,
      link,
      category,
    });
    res.status(200).json({
      success: true,
      message: "Portfolio created successfully",
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

//! Portfolio Get All
exports.allPortfolio = async (req, res) => {
  try {
    let data = await portfolioModel.find();
    res.status(200).json({
      success: true,
      message: "Portfolio fetched successfully",
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

//! Portfolio Get Single

exports.singlePortfolio = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await portfolioModel.findById(id);
    res.status(200).json({
      success: true,
      message: "Portfolio fetched successfully",
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

//! Portfolio update single
exports.updatePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, img, link, category } = req.body;

    let data = await portfolioModel.findByIdAndUpdate(
      id,
      { title, img, link, category },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Portfolio updated successfully",
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

//! Portfolio delete single
exports.deletePortfolio = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await portfolioModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Portfolio deleted successfully",
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
