const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const experienceController = require("../controllers/experienceController.js");
const educationController = require("../controllers/educationController.js");
const advantageController = require("../controllers/advantageController.js");
const portfolioController = require("../controllers/portfolioController.js");
const serviceController = require("../controllers/serviceController.js");
const testimonialController = require("../controllers/testimonialController.js");
const blogController = require("../controllers/blogController.js");
const commentController = require("../controllers/commentController.js");
const dashboardController = require("../controllers/dashboardController.js");
const FileController = require("../controllers/FileController.js");
const middlewares = require("../middlewares/authVerification.js");
const uploadFile = require("../middlewares/FileUploads.js");

//! Register a new user
router.post("/register", userController.register);
//! User Login
router.post("/login", userController.login);
router.get("/user", middlewares, userController.user);
router.get("/logout", middlewares, userController.logout);
router.put("/update", middlewares, userController.update);

//! Dashboard
router.get("/dashboard", middlewares, dashboardController.dashboard);

//! Experience
router.post(
  "/create-experience",
  middlewares,
  experienceController.createExperience
);
router.get("/all-experience", experienceController.allExperience);
router.get("/single-experience/:id", experienceController.singleExperience);
router.put(
  "/update-experience/:id",
  middlewares,
  experienceController.updateExperience
);
router.delete(
  "/delete-experience/:id",
  middlewares,
  experienceController.deleteExperience
);

//! Education
router.post(
  "/create-education",
  middlewares,
  educationController.createEducation
);
router.get("/all-education", educationController.allEducation);
router.get("/single-education/:id", educationController.singleEducation);
router.put(
  "/update-education/:id",
  middlewares,
  educationController.updateEducation
);
router.delete(
  "/delete-education/:id",
  middlewares,
  educationController.deleteEducation
);

//! Advantage
router.post(
  "/create-advantage",
  middlewares,
  advantageController.createAdvantage
);
router.get("/all-advantage", advantageController.allAdvantage);
router.get("/single-advantage/:id", advantageController.singleAdvantage);
router.put(
  "/update-advantage/:id",
  middlewares,
  advantageController.updateAdvantage
);
router.delete(
  "/delete-advantage/:id",
  middlewares,
  advantageController.deleteAdvantage
);

//! Portfolio
router.post(
  "/create-portfolio",
  middlewares,
  portfolioController.createPortfolio
);
router.get("/all-portfolio", portfolioController.allPortfolio);
router.get("/single-portfolio/:id", portfolioController.singlePortfolio);
router.put(
  "/update-portfolio/:id",
  middlewares,
  portfolioController.updatePortfolio
);
router.delete(
  "/delete-portfolio/:id",
  middlewares,
  portfolioController.deletePortfolio
);

//! Service
router.post("/create-service", middlewares, serviceController.createService);
router.get("/all-service", serviceController.allService);
router.get("/single-service/:id", serviceController.singleService);
router.put("/update-service/:id", middlewares, serviceController.updateService);
router.delete(
  "/delete-service/:id",
  middlewares,
  serviceController.deleteService
);

//! Testimonial
router.post(
  "/create-testimonial",
  middlewares,
  testimonialController.createTestimonial
);
router.get("/all-testimonial", testimonialController.allTestimonial);
router.get("/single-testimonial/:id", testimonialController.singleTestimonial);
router.put(
  "/update-testimonial/:id",
  middlewares,
  testimonialController.updateTestimonial
);
router.delete(
  "/delete-testimonial/:id",
  middlewares,
  testimonialController.deleteTestimonial
);

//! Blog
router.post("/create-blog", middlewares, blogController.createBlog);
router.get("/all-blog/:perPage/:pageNo", blogController.allBlog);
router.get("/single-blog/:id", blogController.singleBlog);
router.put("/update-blog/:id", middlewares, blogController.updateBlog);
router.delete("/delete-blog/:id", middlewares, blogController.deleteBlog);

//! Comment
router.post("/create-comment", commentController.createComment);
router.get("/all-comment", commentController.allComment);
router.get("/single-comment/:id", commentController.singleComment);
router.put("/update-comment/:id", middlewares, commentController.updateComment);
router.delete(
  "/delete-comment/:id",
  middlewares,
  commentController.deleteComment
);

// ! File Uploads
router.post(
  "/upload",
  middlewares,
  uploadFile.single("file"),
  FileController.FileUpload
);
router.post("/remove", middlewares, FileController.FileRemove);
// router.get("/all-file/:item/:pageNo", AdminController.AllFile);

module.exports = router;
