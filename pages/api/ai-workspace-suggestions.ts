import React from 'react'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {'
    return res.status(405).json({ error: 'Method not allowed' });'
  }

  // Mock workspace suggestions
  const suggestions = [
    {
      id: '1','
      type: 'productivity','
      title: 'Implement time tracking','
      description: 'Add time tracking to monitor project progress','
      impact: 'high','
      effort: 'medium''
    },
    {
      id: '2','
      type: 'collaboration','
      title: 'Add team chat','
      description: 'Integrate team communication tools','
      impact: 'high','
      effort: 'low''
    },
    {
      id: '3','
      type: 'automation','
      title: 'Automate reporting','
      description: 'Set up automated weekly reports','
      impact: 'medium','
      effort: 'high''
    }
  ];

  res.status(200).json(suggestions);
}
