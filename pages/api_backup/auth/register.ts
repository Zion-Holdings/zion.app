import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password, name } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Validate password strength
    if (password.length < 8) {
      return res.status(400).json({ 
        error: 'Password must be at least 8 characters long'
      });
    }

    // Mock registration for development
    if (process.env.NODE_ENV === 'development') {
      return res.status(201).json({
        success: true,
        user: {
          id: 'new-user-' + Date.now(),
          email: email,
          name: name || email.split('@')[0]
        },
        message: 'Registration successful (development mode)'
      });
    }

    return res.status(500).json({
      error: 'Registration not implemented in production'
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
} 