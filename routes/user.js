const express = require("express");
const router = express.Router();

// Define routes
router.get("/", (req, res) => {
  res.send("User Home Route");
});

router.post("/register", (req, res) => {
  res.send("User Registration Route");
});

module.exports = router; // Export the router object
