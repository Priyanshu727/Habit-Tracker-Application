const express = require('express');
const { getAllUsers, getUserHabitStats,getAllUsersAndHabits} = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/users', protect, admin, getAllUsers);
router.get('/users/:userId/habits', protect, admin, getUserHabitStats);
router.get('/users/habits', protect, admin, getAllUsersAndHabits);

module.exports = router;
