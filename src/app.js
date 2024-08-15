const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.json());

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Export the app for testing
module.exports = app;
