const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { jwtSecret } = require('../config');

if (!jwtSecret) {
  throw new Error('JWT_SECRET not defined');
}

exports.loginUser = async function (req, res, next) {
  console.info('[LOGIN]', req.body.email);
  try {
    const email = req.body.email.toLowerCase().trim();
  const user = await User.findOne({ email }).select('+passwordHash');
  if (!user) {
    console.warn(`[LOGIN] Email not found: ${email}`);
    const error = new Error('Email not registered');
    error.status = 401;
    error.code = 'EMAIL_NOT_FOUND';
    return next(error);
  }
  if (user.active === false) {
    console.warn(`[LOGIN] Inactive account: ${email}`);
    const error = new Error('Account inactive');
    error.status = 403;
    error.code = 'ACCOUNT_INACTIVE';
    return next(error);
  }
  const isMatch = await bcrypt.compare(req.body.password, user.passwordHash);
  if (!isMatch) {
    console.warn(`[LOGIN] Wrong password for ${email}`);
    const error = new Error('Incorrect password');
    error.status = 401;
    error.code = 'WRONG_PASSWORD';
    return next(error);
  }

  const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '7d' });
  console.info(`[LOGIN] Success for ${email}`);
  res.json({
    accessToken: token,
    user: { id: user._id, email: user.email, name: user.name },
  });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// Maintain backwards compatibility if other modules still call `login`
exports.login = exports.loginUser;

exports.registerUser = async function (req, res, next) {
  try {
    const name = req.body.name;
    const email = req.body.email.toLowerCase().trim();
    const password = req.body.password;
    if (!name || !email || !password) {
      const error = new Error('Missing required fields');
      error.status = 400;
      return next(error);
    }

    const newUser = new User({ name, email });
    await newUser.setPassword(password);

    const saved = await User.create(newUser);
    const exists = await User.findOne({ email: newUser.email });
    console.log('User persisted?', !!exists);

    const token = jwt.sign({ id: saved._id }, jwtSecret, { expiresIn: '7d' });
    return res.status(201).json({
      accessToken: token,
      user: { id: saved._id, email: saved.email, name: saved.name },
    });
  } catch (err) {
    if (err && err.code === 11000) {
      err.status = 409;
      err.code = 'EMAIL_EXISTS';
      err.message = 'Email already registered';
      return next(err);
    }
    console.error(err);
    next(err);
  }
};

// Maintain backwards compatibility if other modules still call `register`
exports.register = exports.registerUser;
