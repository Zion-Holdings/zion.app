import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import { sendResetEmail } from '../../../src/lib/email';
import prisma from '../../../src/lib/db'; // Import Prisma client

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Environment variable checks
  if (!process.env.SENDGRID_API_KEY) {
    console.error('Missing SENDGRID_API_KEY environment variable. Password reset emails may not be sent.');
  }
  if (!process.env.SENDGRID_FROM_EMAIL) {
    console.error('Missing SENDGRID_FROM_EMAIL environment variable. Password reset emails may not be sent.');
  }
  if (!process.env.NEXT_PUBLIC_APP_URL) {
    console.warn('Missing NEXT_PUBLIC_APP_URL environment variable. Defaulting to http://localhost:3000 for reset URLs.');
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ message: 'Email is required.' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      console.log(`Forgot password attempt for non-existent email: ${email}`);
      return res.status(200).json({ message: 'If your email address exists in our system, you will receive a password reset link.' });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    const passwordResetExpires = new Date(Date.now() + 3600000); // 1 hour from now

    // Ensure these field names (resetToken, resetTokenExpiry) match your Prisma User schema.
    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetToken: passwordResetToken,      // Or the equivalent field in your schema
        resetTokenExpiry: passwordResetExpires, // Or the equivalent field in your schema
      },
    });

    await sendResetEmail(user.email, resetToken);

    return res.status(200).json({ message: 'If your email address exists in our system, you will receive a password reset link.' });

  } catch (error: any) { // Catch any error
    console.error('Forgot Password Processing Error:', error);
    // Log the detailed error for server-side inspection
    // For Prisma errors, error.message or error.code might be useful,
    // but avoid sending detailed Prisma error messages to the client.
    return res.status(500).json({ message: 'An internal server error occurred. Please try again later.' });
  }
}
