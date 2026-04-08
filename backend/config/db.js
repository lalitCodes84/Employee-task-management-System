const mysql = require("mysql2");
require("dotenv").config();

// Create MySQL connection using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to database
db.connect((error) => {
  if (error) {
    console.error("Database connection failed:", error.message);
    return;
  }

  console.log("MySQL connected successfully");
});

// Export database connection
module.exports = db;