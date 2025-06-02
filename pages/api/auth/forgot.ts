import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import { sendResetEmail } from '../../../src/lib/email';
import prisma from '../../../src/lib/db'; // Import Prisma client

// Define a type for the expected successful response
interface SuccessResponse {
  message: string;
}

// Define a type for error responses
interface ErrorResponse {
  message: string;
  error?: string; // Optional error details
}


export default async function handler(req: NextApiRequest, res: NextApiResponse<SuccessResponse | ErrorResponse>) {
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
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { email } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ message: 'Email is required.' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      console.log(`Forgot password attempt for non-existent email: ${email}`);
      // Important: Always return a generic message to prevent email enumeration
      return res.status(200).json({ message: 'If your email address exists in our system, you will receive a password reset link.' });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    const passwordResetExpires = new Date(Date.now() + 3600000); // 1 hour from now

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetToken: passwordResetToken,
        resetTokenExpiry: passwordResetExpires,
      },
    });

    // Ensure sendResetEmail is robust and handles its own errors gracefully
    await sendResetEmail(user.email, resetToken);

    return res.status(200).json({ message: 'If your email address exists in our system, you will receive a password reset link.' });

  } catch (error: unknown) { 
    console.error('Forgot Password Processing Error:', error);
    
    let errorDetails: string | undefined;
    if (error instanceof Error) {
      errorDetails = error.message;
    } else if (typeof error === 'string') {
      errorDetails = error;
    }

    return res.status(500).json({ 
      message: 'An internal server error occurred. Please try again later.',
      error: errorDetails 
    });
  } finally {
    // Ensures Prisma client is disconnected after the request,
    // though typically not needed in serverless environments where connection management is handled differently.
    // await prisma.$disconnect(); 
    // Commenting out for now, as it might not be necessary for all setups (e.g. Vercel).
  }
}
