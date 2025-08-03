const advantageModel = require("../models/advantageModel");
const blogModel = require("../models/blogModel");
const commentModel = require("../models/commentModel");
const educationModel = require("../models/educationModel");
const experienceModel = require("../models/experienceModel");
const portfolioModel = require("../models/portfolioModel");
const serviceModel = require("../models/serviceModel");
const userModel = require("../models/userModel");

exports.dashboard = async (req, res) => {
  try {
    let email = req.headers.email;

    let user = await userModel.aggregate([
      { $match: { email } },
      { $project: { password: 0 } },
    ]);

    const experienceResult = await experienceModel.aggregate([
      {
        $facet: {
          total: [{ $count: "count" }],
        },
      },
    ]);

    const educationResult = await educationModel.aggregate([
      {
        $facet: {
          total: [{ $count: "count" }],
        },
      },
    ]);

    const advantageResult = await advantageModel.aggregate([
      {
        $facet: {
          total: [{ $count: "count" }],
        },
      },
    ]);
    const portfolioResult = await portfolioModel.aggregate([
      {
        $facet: {
          total: [{ $count: "count" }],
        },
      },
    ]);
    const serviceResult = await serviceModel.aggregate([
      {
        $facet: {
          total: [{ $count: "count" }],
        },
      },
    ]);
    const blogResult = await blogModel.aggregate([
      {
        $facet: {
          total: [{ $count: "count" }],
        },
      },
    ]);
    const commentResult = await commentModel.aggregate([
      {
        $facet: {
          total: [{ $count: "count" }],
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: {
        user,
        experience: {
          count: experienceResult[0]?.total[0]?.count || 0,
        },
        education: {
          count: educationResult[0]?.total[0]?.count || 0,
        },
        advantage: {
          count: advantageResult[0]?.total[0]?.count || 0,
        },
        portfolio: {
          count: portfolioResult[0]?.total[0]?.count || 0,
        },
        service: {
          count: serviceResult[0]?.total[0]?.count || 0,
        },
        blog: {
          count: blogResult[0]?.total[0]?.count || 0,
        },
        comment: {
          count: commentResult[0]?.total[0]?.count || 0,
        },
      },
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.toString(),
      message: "Something went wrong.",
    });
  }
};
