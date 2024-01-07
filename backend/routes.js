const express = require("express");
const db = require("./db");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, fullName, password, role, university } = req.body;

  // Check if the username already exists
  db.get("SELECT * FROM users WHERE username = ?", [username], async (err, existingUser) => {
    if (err) {
      console.error("Error checking existing username:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else if (existingUser) {
      // Username already exists
      res.status(400).json({ error: "Username already in use. Please choose a different username." });
    } else {
      // Hash the password before storing it in the database
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user
      db.run("INSERT INTO users (username, fullName, password, role, university) VALUES (?, ?, ?, ?, ?)", [username, fullName, hashedPassword, role, university], (err) => {
        if (err) {
          console.error("Error registering user:", err);
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          res.status(201).json({ message: "User registered successfully" });
        }
      });
    }
  });
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
          // If login is successful, fetch additional user data
          db.get(
            "SELECT fullName, role FROM users WHERE username = ?",
            [username],
            (error, userData) => {
              if (error) {
                console.error("Error fetching user data:", error);
                res.status(500).json({ error: "Internal Server Error" });
              } else {
                res.status(200).json({
                  message: "Login successful",
                  user: userData,
                });
              }
            }
          );
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      }
    }
  );
});

module.exports = router;
