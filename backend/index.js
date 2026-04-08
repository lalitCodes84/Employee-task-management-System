// Import required packages
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import database connection
require("./config/db");

// Import routes
const authRoutes = require("./routes/authRoutes");

// Create express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to allow cross-origin requests
app.use(cors());

// Register authentication routes
app.use("/api/auth", authRoutes);

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server running successfully",
  });
});

// Define server port
const PORT = process.env.PORT || 4444;

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
