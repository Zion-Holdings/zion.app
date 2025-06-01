const express = require('express');
const {
  forgotPassword,
  verifyCode,
  resetPassword,
} = require('../controllers/authController');

const router = express.Router();

router.post('/forgot', forgotPassword);
router.post('/verify-code', verifyCode);
router.put('/reset', resetPassword);

module.exports = router;
