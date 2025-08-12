const express = require('express');
const rateLimit = require('express-rate-limit');
const { loginUser, registerUser } = require('../controllers/authController');

const router = express.Router();
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/login', authLimiter, loginUser);
router.post('/register', authLimiter, registerUser);

module.exports = router;
