const cron = require('node-cron');
const Habit = require('../models/habitModel');
const { sendNotification } = require('./notificationService'); // Implement sending logic

cron.schedule('0 9 * * *', async () => {
  const habits = await Habit.find({ reminderTime: { $lte: new Date() } });
  habits.forEach((habit) => {
    sendNotification(habit.user, `Reminder to complete your habit: ${habit.title}`);
  });
  console.log('Daily habit reminders sent.');
});
