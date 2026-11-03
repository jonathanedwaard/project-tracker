// load env values.
require("dotenv").config();

// create the app.
const express = require("express");
const cors = require("cors");
const app = express();

// allow browser calls from other origins.
app.use(cors());

// read JSON request bodies.
app.use(express.json());

// define one route.
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// start the server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});