const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sgMail = require('@sendgrid/mail');
const User = require('../models/User');
const { jwtSecret } = require('../config');

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_TEMPLATE_ID = process.env.SENDGRID_TEMPLATE_ID;

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

const resetRequests = {};

exports.login = async function(req, res) {
  console.info('[LOGIN]', req.body.email);
  console.info('[ENV] JWT_SECRET:', jwtSecret);
  try {
    const email = req.body.email.toLowerCase().trim();
    const user = await User.findOne({ email }).select('+passwordHash');
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.passwordHash);
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

exports.forgotPassword = async function(req, res) {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  const code = Math.floor(100000 + Math.random() * 900000).toString();
  resetRequests[email] = { code, expires: Date.now() + 10 * 60 * 1000 };

  try {
    if (SENDGRID_API_KEY && SENDGRID_TEMPLATE_ID) {
      await sgMail.send({
        to: email,
        from: process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com',
        templateId: SENDGRID_TEMPLATE_ID,
        dynamicTemplateData: { code },
      });
    }
  } catch (err) {
    console.error('SendGrid error', err);
  }
  res.json({ message: 'If account exists, a verification code was sent' });
};

exports.verifyCode = function(req, res) {
  const { email, code } = req.body;
  const entry = resetRequests[email];
  if (!entry || entry.code !== code || entry.expires < Date.now()) {
    return res.status(400).json({ message: 'Invalid code' });
  }
  const token = jwt.sign({ email }, jwtSecret, { expiresIn: '15m' });
  res.json({ token });
};

exports.resetPassword = async function(req, res) {
  const { token, password } = req.body;
  try {
    const { email } = jwt.verify(token, jwtSecret);
    const user = await User.findOne({ email }).select('+passwordHash');
    if (!user) throw new Error('User not found');
    user.passwordHash = await bcrypt.hash(password, 10);
    await user.save();
    delete resetRequests[email];
    res.json({ message: 'Password updated' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Invalid or expired token' });
  }
};
