const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { jwtSecret } = require('../config');

if (!jwtSecret) {
  throw new Error('JWT_SECRET not defined');
}

exports.loginUser = async function (req, res) {
  console.info('[LOGIN]', req.body.email);
  console.info('[ENV] JWT_SECRET:', jwtSecret);
  try {
    const email = req.body.email.toLowerCase().trim();
    const user = await User.findOne({ email }).select('+passwordHash');
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isMatch = bcrypt.compareSync(req.body.password, user.passwordHash);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '7d' });
    res.json({
      token,
      user: { id: user._id, email: user.email, name: user.name },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Maintain backwards compatibility if other modules still call `login`
exports.login = exports.loginUser;

exports.registerUser = async function (req, res) {
  try {
    const { name, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    let user;
    try {
      user = await User.create({ name, email: email.toLowerCase().trim(), passwordHash });
    } catch (err) {
      console.error('User.create error code:', err.code);
      if (err.code === 11000) {
        return res.status(409).json({ message: 'Email already registered' });
      }
      return res.status(400).json({ message: err.message });
    }

    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '7d' });
    res.status(201).json({
      token,
      user: { id: user._id, email: user.email, name: user.name },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
