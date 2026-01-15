const express = require("express");
const cors = require("cors");

// Swagger imports
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./docs/swagger.yaml");

// Route imports
const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");
const adminRoutes = require("./routes/admin.routes");

// Initialize app FIRST
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Swagger route (AFTER app is initialized)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/admin", adminRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("🚀 SecureTask API is running");
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});

module.exports = app;
