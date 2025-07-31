const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController.js");
const ExperienceController = require("../controllers/ExperienceController.js");
const EducationController = require("../controllers/EducationController.js");
const AdvantageController = require("../controllers/AdvantageController.js");
const PortfolioController = require("../controllers/PortfolioController.js");
const ServiceController = require("../controllers/ServiceController.js");
const BlogController = require("../controllers/BlogController.js");
const middlewares = require("../middlewares/AuthVerification.js");

//! Register a new user
router.post("/register", UserController.register);
//! User Login
router.post("/login", UserController.login);
router.get("/user", middlewares, UserController.user);
router.get("/logout", middlewares, UserController.logout);
router.put("/update", middlewares, UserController.update);

//! Experience
router.post("/create-experience", ExperienceController.createExperience);
router.get("/all-experience", ExperienceController.allExperience);
router.get("/single-experience/:id", ExperienceController.singleExperience);
router.put("/update-experience/:id", ExperienceController.updateExperience);
router.delete("/delete-experience/:id", ExperienceController.deleteExperience);

//! Education
router.post("/create-education", EducationController.createEducation);
router.get("/all-education", EducationController.allEducation);
router.get("/single-education/:id", EducationController.singleEducation);
router.put("/update-education/:id", EducationController.updateEducation);
router.delete("/delete-education/:id", EducationController.deleteEducation);

//! Advantage
router.post("/create-advantage", AdvantageController.createAdvantage);
router.get("/all-advantage", AdvantageController.allAdvantage);
router.get("/single-advantage/:id", AdvantageController.singleAdvantage);
router.put("/update-advantage/:id", AdvantageController.updateAdvantage);
router.delete("/delete-advantage/:id", AdvantageController.deleteAdvantage);

//! Portfolio
router.post("/create-portfolio", PortfolioController.createPortfolio);
router.get("/all-portfolio", PortfolioController.allPortfolio);
router.get("/single-portfolio/:id", PortfolioController.singlePortfolio);
router.put("/update-portfolio/:id", PortfolioController.updatePortfolio);
router.delete("/delete-portfolio/:id", PortfolioController.deletePortfolio);

//! Service
router.post("/create-service", ServiceController.createService);
router.get("/all-service", ServiceController.allService);
router.get("/single-service/:id", ServiceController.singleService);
router.put("/update-service/:id", ServiceController.updateService);
router.delete("/delete-service/:id", ServiceController.deleteService);

//! Blog
router.post("/create-blog", BlogController.createBlog);
router.get("/all-blog/:perPage/:pageNo", BlogController.allBlog);
router.get("/single-blog/:id", BlogController.singleBlog);
router.put("/update-blog/:id", BlogController.updateBlog);
router.delete("/delete-blog/:id", BlogController.deleteBlog);

module.exports = router;
