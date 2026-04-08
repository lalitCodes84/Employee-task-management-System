const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createUser, findUserByEmail } = require("../models/userModel");

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  createUser(name, email, hashedPassword, role, (err, result) => {
    if (err) return res.status(500).send(err);

    res.status(201).send("User Registered Successfully");
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, async (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.length === 0) {
      return res.status(404).send("User not found");
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ id: user.id }, "secretkey", {
      expiresIn: "1d"
    });

    res.json({
      message: "Login successful",
      token
    });
  });
};

module.exports = {
  registerUser,
  loginUser
};