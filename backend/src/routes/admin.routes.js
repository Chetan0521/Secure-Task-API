const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const {
  getAllUsers,
  getAllTasks,
} = require("../controllers/admin.controller");

const router = express.Router();

// Admin only
router.use(authMiddleware);
router.use(roleMiddleware("admin"));

router.get("/users", getAllUsers);
router.get("/tasks", getAllTasks);

module.exports = router;
