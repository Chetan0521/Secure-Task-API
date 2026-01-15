const User = require("../models/user.model");
const Task = require("../models/task.model");

// Get all users (ADMIN)
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

// Get all tasks (ADMIN)
exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().populate("user", "name email role");
    res.json({
      success: true,
      count: tasks.length,
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};
