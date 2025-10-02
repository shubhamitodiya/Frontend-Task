const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db"); // Import db.js
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Connect DB + start server
connectDB().then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});
