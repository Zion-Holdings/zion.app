import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Mock email resend for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Mock: Verification email would be sent to:', email);
      return res.status(200).json({
        success: true,
        message: 'Verification email sent successfully (development mode)'
      });
    }

    return res.status(500).json({
      error: 'Email service not configured'
    });

  } catch (error) {
    console.error('Email resend error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
} 