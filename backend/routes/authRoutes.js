const express = require("express");
const router = express.Router();

// Import authentication controllers
const {
  registerUser,
  loginUser
} = require("../controllers/authController");

// Authentication routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Export router
module.exports = router;