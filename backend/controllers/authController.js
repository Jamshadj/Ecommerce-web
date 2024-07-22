import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Function to validate registration input
const validateRegistrationInput = (data) => {
  const errors = [];
  const { name, email, password } = data;

  if (!name || name.length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters long' });
  }

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    errors.push({ field: 'email', message: 'Invalid email address' });
  }

  if (!password || password.length < 6) {
    errors.push({ field: 'password', message: 'Password must be at least 6 characters long' });
  }

  return errors;
};

// Registration route
export const registerUser = async (req, res) => {
  const errors = validateRegistrationInput(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, "seceret_key", {
      expiresIn: '1h',
    });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to validate login input
const validateLoginInput = (data) => {
  const errors = [];
  const { email, password } = data;

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    errors.push({ field: 'email', message: 'Invalid email address' });
  }

  if (!password) {
    errors.push({ field: 'password', message: 'Password is required' });
  }

  return errors;
};

// Login route
export const loginUser = async (req, res) => {
  const errors = validateLoginInput(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ id: existingUser._id }, "seceret_key", {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
