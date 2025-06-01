import express from 'express';
import { forgotPassword, verifyCode, resetPassword } from '../controllers/authController.js';

const router = express.Router();

router.post('/forgot', forgotPassword);
router.post('/verify-code', verifyCode);
router.put('/reset', resetPassword);

export default router;
