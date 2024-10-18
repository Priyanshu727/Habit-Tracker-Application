const Habit = require('../models/habitModel');

exports.createHabit = async (req, res) => {
  try {
    const habit = new Habit({ ...req.body, user: req.user.id });
    await habit.save();
    res.status(201).json(habit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.user.id });
    res.status(200).json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (habit.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    Object.assign(habit, req.body);
    await habit.save();
    res.status(200).json(habit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteHabit = async (req, res) => {
    try {
      const habitId = req.params.id;
      const habit = await Habit.findByIdAndDelete(habitId);
  
      if (!habit) {
        return res.status(404).json({ message: 'Habit not found' });
      }
  
      res.status(200).json({ message: 'Habit deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
