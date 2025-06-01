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
codex/handle-duplicate-email-error
    const name = req.body.name;
    const email = req.body.email.toLowerCase().trim();
    const password = req.body.password;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const user = new User({ name, email });
    await user.setPassword(password);
    await user.save();

    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '7d' });
    return res.status(201).json({
main
      token,
      user: { id: user._id, email: user.email, name: user.name },
    });
  } catch (err) {
codex/handle-duplicate-email-error
    if (err && err.code === 11000) {
      return res.status(409).json({ code: 'EMAIL_EXISTS', message: 'Email already registered' });
    }
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Maintain backwards compatibility if other modules still call `register`
exports.register = exports.registerUser;

const crypto = require('crypto');
const sgMail = require('@sendgrid/mail');

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

exports.forgotPassword = async function(req, res) {
  const email = req.body.email && req.body.email.toLowerCase().trim();
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    // Always return success to prevent email enumeration
    return res.status(200).json({ message: 'If that email exists, a reset link has been sent' });
  }

  const resetToken = crypto.randomBytes(32).toString('hex');
  const hashed = crypto.createHash('sha256').update(resetToken).digest('hex');
  user.resetPasswordToken = hashed;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  await user.save();

  const resetUrl = `${process.env.CLIENT_URL || 'http://localhost:3000'}/reset-password/${resetToken}`;

  if (process.env.SENDGRID_API_KEY) {
    try {
      await sgMail.send({
        to: user.email,
        from: process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com',
        subject: 'Password Reset',
        html: `<p>Reset your password <a href="${resetUrl}">here</a>.</p>`,
      });
    } catch (err) {
      console.error('Email send error', err);
    }
  }

  return res.status(200).json({ message: 'If that email exists, a reset link has been sent' });
};

exports.resetPassword = async function(req, res) {
  const { token } = req.params;
  const { password } = req.body;

  if (!token || !password) {
    return res.status(400).json({ message: 'Token and password are required' });
  }

  const hashed = crypto.createHash('sha256').update(token).digest('hex');
  const user = await User.findOne({
    resetPasswordToken: hashed,
    resetPasswordExpires: { $gt: Date.now() },
  }).select('+passwordHash');

  if (!user) {
    return res.status(400).json({ message: 'Invalid or expired password reset token' });
  }

  await user.setPassword(password);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();

  res.json({ message: 'Password updated' });
};
main
