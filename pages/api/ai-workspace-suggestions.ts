import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const suggestions = [
      {
        id: 'suggestion-1',
        type: 'workspace-optimization',
        priority: 'high',
        description: 'Implement flexible seating arrangements'
      },
      {
        id: 'suggestion-2',
        type: 'technology-upgrade',
        priority: 'medium',
        description: 'Add collaborative tools and displays'
      }
    ];

    return res.status(200).json(suggestions);
  } catch (error) {
    console.error('Workspace Suggestions API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}