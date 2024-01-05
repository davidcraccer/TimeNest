const express = require("express");
const db = require("./db");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password, role, university } = req.body;

  // Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(
    "INSERT INTO users (username, password, role, university) VALUES (?, ?, ?, ?)",
    [username, hashedPassword, role, university],
    (err) => {
      if (err) {
        console.error("Error registering user:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(201).json({ message: "User registered successfully" });
      }
    }
  );
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, row) => {
      if (err) {
        console.error("Error verifying user credentials:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else if (!row) {
        res.status(401).json({ error: "Invalid credentials" });
      } else {
        // Compare the hashed password with the provided password
        const passwordMatch = await bcrypt.compare(password, row.password);

        if (passwordMatch) {
          res.status(200).json({ message: "Login successful" });
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      }
    }
  );
});

module.exports = router;
