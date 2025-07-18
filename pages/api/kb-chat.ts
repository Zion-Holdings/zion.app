import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Mock response
    const response = {
      answer: `This is a mock response to: "${message}"`,
      sources: [],
      timestamp: new Date().toISOString()
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
