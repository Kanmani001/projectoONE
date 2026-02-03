require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const educatorRoutes = require("./routes/educatorRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/educators", educatorRoutes);
app.use("/api/feedbacks", feedbackRoutes);

// Test route (optional but very useful)
app.get("/api", (req, res) => {
  res.json({ message: "Backend is working on Vercel" });
});

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB error:", err);
  });

// IMPORTANT FOR VERCEL
module.exports = app;
