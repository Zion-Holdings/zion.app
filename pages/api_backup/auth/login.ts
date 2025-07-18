import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Mock authentication for development
    if (process.env.NODE_ENV === 'development') {
      if (email === 'dev@example.com' && password === 'dev123') {
        return res.status(200).json({
          user: {
            id: 'dev-user-1',
            email: 'dev@example.com',
            name: 'Dev User',
            email_verified: true
          },
          message: 'Development authentication successful'
        });
      }
    }

    return res.status(401).json({ error: 'Invalid credentials' });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 