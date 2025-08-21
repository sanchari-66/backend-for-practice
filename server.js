const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.send("Hello from Render!");
});

// Serve your package.json file
app.get("/package.json", (req, res) => {
  res.sendFile(path.join(__dirname, "package.json"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
