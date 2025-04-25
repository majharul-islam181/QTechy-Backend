const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// Register
const registerUser = async (req, res) => {
    const { email, password, name, phone } = req.body;
  
    try {
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      if (!email || !password || !name || !phone) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const user = await User.create({
        email,
        password: hashedPassword,
        name,
        phone,
      });
  
      res.status(201).json({
        _id: user._id,
        email: user.email,
        name: user.name,
        phone: user.phone,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
// Login
const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
          _id: user._id,
          email: user.email,
          name: user.name,
          phone: user.phone,
          role: user.role, // send role
          token: generateToken(user._id),
        });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  

// Logout
const logoutUser = (req, res) => {
    res.json({ message: 'Logged out successfully' });
  };
  

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
