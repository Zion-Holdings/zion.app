import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { workspaceType, requirements } = req.body;

    // Mock workspace suggestions
    const suggestions = [
      {
        id: '1',
        type: 'collaborative',
        name: 'Open Office Layout',
        description: 'Promotes team collaboration and communication',
        features: ['Flexible seating', 'Meeting spaces', 'Breakout areas'],
        estimatedCost: 50000
      },
      {
        id: '2',
        type: 'focused',
        name: 'Private Office Setup',
        description: 'Individual workspaces for focused work',
        features: ['Soundproofing', 'Personal storage', 'Ergonomic furniture'],
        estimatedCost: 75000
      }
    ];

    return res.status(200).json({
      success: true,
      suggestions: suggestions
    });
  } catch (error) {
    console.error('Workspace Suggestions API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 