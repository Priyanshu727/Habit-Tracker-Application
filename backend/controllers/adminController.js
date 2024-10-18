const User = require('../models/userModel');
const Habit = require('../models/habitModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserHabitStats = async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.params.userId });
    res.status(200).json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getAllUsersAndHabits = async (req, res) => {
    try {
      // Fetch all users and their habits by populating the habits for each user
      const users = await User.find().populate('habits');  // Assuming habits field exists in User model
  
      // Return the list of users with their habits
      res.status(200).json({
        message: 'Users and their habits retrieved successfully',
        users
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.createHabitTemplate = async (req, res) => {
  try {
    // Logic for creating habit templates for users to adopt.
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
