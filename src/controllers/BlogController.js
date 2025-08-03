const mongoose = require("mongoose");
const blogModel = require("../models/blogModel");

//! Blog create
exports.createBlog = async (req, res) => {
  try {
    const { title, img, category, description } = req.body;

    let data = await blogModel.create({
      title,
      category,
      description,
      img,
    });
    res.status(200).json({
      success: true,
      message: "Blog created successfully",
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

//! Blog Get All with Pagination

exports.allBlog = async (req, res) => {
  try {
    let pageNo = Number(req.params.pageNo);
    let perPage = Number(req.params.perPage);

    let skipRow = (pageNo - 1) * perPage;

    let sortStage = { createdAt: -1 };
    let facetStage = {
      $facet: {
        totalCount: [{ $count: "count" }],
        blogs: [
          { $sort: sortStage },
          { $skip: skipRow },
          { $limit: perPage },
          { $project: { title: 1, img: 1, category: 1, description: 1 } },
        ],
      },
    };

    let blogs = await blogModel.aggregate([facetStage]);

    res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      data: blogs[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Blog Get Single
exports.singleBlog = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await blogModel.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "blogID",
          as: "comments",
        },
      },
      {
        $project: {
          title: 1,
          img: 1,
          category: 1,
          description: 1,
          createdAt: 1,
          comments: 1,
        },
      },
    ]);
    res.status(200).json({
      success: true,
      message: "Blog fetched successfully",
      data: data[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Blog update single
exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, img, category, description } = req.body;

    let data = await blogModel.findByIdAndUpdate(
      id,
      { title, img, category, description },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
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

//! Blog delete single
exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await blogModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
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
