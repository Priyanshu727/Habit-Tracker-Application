const express = require('express');
const { createHabit, getUserHabits, updateHabit, deleteHabit } = require('../controllers/habitController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .get(protect, getUserHabits)
  .post(protect, createHabit);

router.route('/:id')
  .put(protect, updateHabit)
  .delete(protect, deleteHabit);

module.exports = router;
