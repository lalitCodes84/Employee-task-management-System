const db = require("../config/db");

// Create a new user in database
const createUser = (userData, callback) => {
  const { name, email, password, role } = userData;

  const sql = `
    INSERT INTO users (name, email, password, role)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, email, password, role], callback);
};

// Find user by email
const findUserByEmail = (email, callback) => {
  const sql = `
    SELECT * FROM users
    WHERE email = ?
  `;

  db.query(sql, [email], callback);
};

// Export model methods
module.exports = {
  createUser,
  findUserByEmail
};