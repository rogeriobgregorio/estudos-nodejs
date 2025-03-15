const express = require("express");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json()); // Middleware para JSON
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
