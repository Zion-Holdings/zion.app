import sgMail from '@sendgrid/mail';
import jwt from 'jsonwebtoken';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_TEMPLATE_ID = process.env.SENDGRID_TEMPLATE_ID;
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

const resetRequests = {};
const users = {};

export async function forgotPassword(req, res) {
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
}

export function verifyCode(req, res) {
  const { email, code } = req.body;
  const entry = resetRequests[email];
  if (!entry || entry.code !== code || entry.expires < Date.now()) {
    return res.status(400).json({ message: 'Invalid code' });
  }
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '15m' });
  res.json({ token });
}

export function resetPassword(req, res) {
  const { token, password } = req.body;
  try {
    const { email } = jwt.verify(token, JWT_SECRET);
    if (!users[email]) users[email] = {};
    users[email].passwordHash = password;
    delete resetRequests[email];
    res.json({ message: 'Password updated' });
  } catch {
    res.status(400).json({ message: 'Invalid or expired token' });
  }
}
