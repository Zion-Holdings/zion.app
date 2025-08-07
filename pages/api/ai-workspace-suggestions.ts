import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Mock workspace suggestions
    const suggestions = [
      {
        id: 'suggestion-1',
        type: 'workspace-optimization',
        priority: 'high',
        description: 'Implement flexible seating arrangements',
        impact: 'high',
        cost: 15000
      },
      {
        id: 'suggestion-2',
        type: 'technology-upgrade',
        priority: 'medium',
        description: 'Upgrade to latest collaboration tools',
        impact: 'medium',
        cost: 8000
      }
    ];

    res.status(200).json({ suggestions });
  } catch (error) {
    console.error('Error fetching workspace suggestions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
