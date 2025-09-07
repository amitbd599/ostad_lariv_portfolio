const testimonialModel = require("../models/testimonialModel");

//! Testimonial create
exports.createTestimonial = async (req, res) => {
  try {
    const { clientName, address, img, feedback } = req.body;

    let data = await testimonialModel.create({
      clientName,
      address,
      img,
      feedback,
    });
    res.status(200).json({
      success: true,
      message: "Testimonial created successfully",
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

//! Testimonial Get All
exports.allTestimonial = async (req, res) => {
  try {
    let data = await testimonialModel.find();
    res.status(200).json({
      success: true,
      message: "Testimonial fetched successfully",
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

//! Testimonial Get Single
exports.singleTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await testimonialModel.findById(id);
    res.status(200).json({
      success: true,
      message: "Testimonial fetched successfully",
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

//! Testimonial update single
exports.updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const { clientName, address, img, feedback } = req.body;

    let data = await testimonialModel.findByIdAndUpdate(
      id,
      { clientName, address, img, feedback },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Testimonial updated successfully",
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

//! Testimonial delete single
exports.deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await testimonialModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully",
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
