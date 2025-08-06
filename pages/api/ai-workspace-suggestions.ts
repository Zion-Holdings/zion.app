import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const workspaceSuggestions = [
      {
        id: 'suggestion-1',
        category: 'Productivity',
        title: 'Implement Time Tracking',
        description: 'Add time tracking tools to monitor productivity and identify bottlenecks',
        priority: 'high',
        impact: 'medium',
        effort: 'low',
      },
      {
        id: 'suggestion-2',
        category: 'Collaboration',
        title: 'Upgrade Communication Tools',
        description: 'Implement better communication platforms for remote team collaboration',
        priority: 'medium',
        impact: 'high',
        effort: 'medium',
      },
      {
        id: 'suggestion-3',
        category: 'Automation',
        title: 'Automate Repetitive Tasks',
        description: 'Identify and automate routine tasks to improve efficiency',
        priority: 'high',
        impact: 'high',
        effort: 'medium',
      },
    ];

    return res.status(200).json({ success: true, data: workspaceSuggestions });
  } catch (error) {
    console.error('Workspace Suggestions API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
