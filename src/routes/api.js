const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController.js");
const ExperienceController = require("../controllers/ExperienceController.js");
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

module.exports = router;
