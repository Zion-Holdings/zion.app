import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import prisma from '../../../lib/db';
import sgMail from '@sendgrid/mail'; // Import SendGrid mail service

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn('SENDGRID_API_KEY is not set. Email sending will be disabled.');
}

// Actual email sending function using SendGrid
const sendPasswordResetEmail = async (to: string, token: string, userId: string) => { // Added userId for the link
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SendGrid API Key not configured. Cannot send email.');
    // In a real app, you might want to throw an error or handle this more gracefully
    // For now, returning success: false to indicate failure to send.
    return { success: false, message: "Email service not configured." };
  }

  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reset-password/${userId}/${token}`;
  const senderEmail = process.env.SENDGRID_SENDER_EMAIL || 'no-reply@example.com'; // Configure your sender email

  const msg = {
    to: to,
    from: senderEmail, // Use a verified sender email in SendGrid
    subject: 'Your Password Reset Link',
    html: `
      <p>You requested a password reset.</p>
      <p>Click this <a href="${resetUrl}">link</a> to reset your password: ${resetUrl}</p>
      <p>This link will expire in 1 hour.</p>
      <p>If you did not request this, please ignore this email.</p>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log(`Password reset email sent to ${to} via SendGrid.`);
    return { success: true };
  } catch (error) {
    console.error('Error sending password reset email with SendGrid:', error);
    if (error.response) {
      console.error('SendGrid Error Body:', error.response.body);
    }
    return { success: false, error: error.message };
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email } = req.body;

  if (!email || typeof email !== 'string' || !email.trim()) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      console.log(`Forgot password attempt for non-existent email: ${email}`);
      return res.status(200).json({ message: 'If your email address exists in our system, you will receive a password reset link.' });
    }

    const resetToken = crypto.randomBytes(32).toString('hex'); // This is the raw token for the URL
    const passwordResetTokenDb = crypto // This is the token stored in DB (hashed)
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    const passwordResetExpires = new Date(Date.now() + 3600000); // 1 hour

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetToken: passwordResetTokenDb,
        resetTokenExpiry: passwordResetExpires,
      },
    });

    // Use the new email sending function, passing user.id for the reset link
    const emailResult = await sendPasswordResetEmail(user.email, resetToken, user.id);

    if (!emailResult.success) {
        // Log the error, but still return a generic message to the client
        console.error(`Failed to send password reset email to: ${user.email}. Error: ${emailResult.error || emailResult.message}`);
    }

    return res.status(200).json({ message: 'If your email address exists in our system, you will receive a password reset link.' });

  } catch (error) {
    console.error('Forgot Password Error:', error);
    return res.status(500).json({ message: 'An error occurred. Please try again later.' });
  } finally {
    await prisma.$disconnect();
  }
}
