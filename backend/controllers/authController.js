const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password,
      role  // Make sure the role from the body is being saved
    });

    // Generate a token for the user
    const token = createToken(user._id, user.role);

    // Send response with token
    res.cookie('token', token, { httpOnly: true });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user || !(await user.matchPassword(password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const token = createToken(user._id, user.role);
      res.cookie('token', token, { httpOnly: true });
      
      // Sending the success message along with user data
      res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  

exports.logout = (req, res) => {
  res.cookie('token', '', { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: 'Logged out successfully' });
};
