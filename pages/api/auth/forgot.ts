import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import { sendEmailWithSendGrid } from '../../../src/lib/email';

// Placeholder for database interaction (replace with your actual DB client)
const db = {
  user: {
    findUnique: async (options: { where: { email: string } }) => {
      // Mock finding a user
      if (options.where.email === 'exists@example.com') {
        return { id: 'user-id-123', email: options.where.email, passwordHash: 'hashedpassword' };
      }
      return null;
    },
    update: async (options: { where: { id: string }, data: { resetToken?: string | null, resetTokenExpiry?: Date | null } }) => {
      // Mock updating user with token
      console.log('Mock DB: User updated with token', options.data);
      return { ...options.data };
    }
  }
};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ message: 'Email is required.' });
  }

  try {
    const user = await db.user.findUnique({ where: { email } });

    if (!user) {
      // It's good practice not to reveal if an email exists or not for security reasons.
      // However, for debugging or specific requirements, you might change this.
      console.log(`Forgot password attempt for non-existent email: ${email}`);
      // Send a generic success response to prevent email enumeration
      return res.status(200).json({ message: 'If your email address exists in our system, you will receive a password reset link.' });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    const passwordResetExpires = new Date(Date.now() + 3600000); // 1 hour from now

    await db.user.update({
      where: { id: user.id },
      data: {
        resetToken: passwordResetToken,
        resetTokenExpiry: passwordResetExpires,
      },
    });

    // Construct reset URL - ensure your frontend URL is correctly configured
    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reset-password/${resetToken}`;

    // Send the email via SendGrid
    await sendEmailWithSendGrid({
      to: user.email,
      templateId: process.env.SENDGRID_RESET_TEMPLATE_ID || '',
      dynamicTemplateData: { resetUrl },
    });

    return res.status(200).json({ message: 'If your email address exists in our system, you will receive a password reset link.' });

  } catch (error) {
    console.error('Forgot Password Error:', error);
    // Generic error for the client
    return res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
}
