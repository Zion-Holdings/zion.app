import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const capacityPlans = [
      {
        id: 'plan-1',
        name: 'Data Center Expansion',
        type: 'infrastructure',
        recommendations: ['Add server racks', 'Upgrade cooling system', 'Implement redundancy']
      },
      {
        id: 'plan-2',
        name: 'Development Team Growth',
        type: 'workforce',
        recommendations: ['Hire senior developers', 'Implement mentorship program', 'Add training resources']
      }
    ];

    return res.status(200).json(capacityPlans);
  } catch (error) {
    console.error('Capacity Planning API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}