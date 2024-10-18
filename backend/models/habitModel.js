const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: [true, 'Please provide a habit title'],
    minlength: [3, 'Title must be at least 3 characters long'],
    maxlength: [100, 'Title cannot exceed 100 characters'],
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly'], // Limits the frequency options
    default: 'daily',
    required: [true, 'Please specify the frequency of the habit'],
  },
  streak: {
    type: Number,
    default: 0,
    min: [0, 'Streak cannot be negative'],
  },
  progress: {
    type: Number,
    default: 0,
    min: [0, 'Progress cannot be negative'],
  },
  reminderTime: {
    type: String,
    required: [true, 'Please specify the reminder time'],
    validate: {
      validator: function (v) {
        // Simple regex for HH:MM format
        return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
      },
      message: (props) => `${props.value} is not a valid time format! Use HH:MM.`,
    },
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt
});

module.exports = mongoose.model('Habit', habitSchema);
