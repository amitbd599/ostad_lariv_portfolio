const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController.js");
const middlewares = require("../middlewares/AuthVerification.js");

//! Register a new user
router.post("/register", UserController.register);
//! User Login
router.post("/login", UserController.login);
router.get("/user", middlewares, UserController.user);
router.get("/logout", middlewares, UserController.logout);
router.put("/update", middlewares, UserController.update);

module.exports = router;
