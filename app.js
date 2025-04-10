const express = require("express");
const app = express();
const path = require("path");

const PORT = 5000;

// Middleware to serve static files (CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/skills", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "skills.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
