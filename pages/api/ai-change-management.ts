import type { NextApiRequest, NextApiResponse } from 'next';

interface ChangeInitiative {
  id: string;
  name: string;
  type: 'technology' | 'process' | 'organizational' | 'cultural';
  status: 'planned' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  impact: 'low' | 'medium' | 'high';
  description: string;
  stakeholders: string[];
  timeline: {
    startDate: string;
    endDate: string;
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Mock change management data
    const changeInitiatives: ChangeInitiative[] = [
      {
        id: 'change-1',
        name: 'Digital Transformation Initiative',
        type: 'technology',
        status: 'in-progress',
        priority: 'high',
        impact: 'high',
        description: 'Implementing new digital tools and processes across the organization',
        stakeholders: ['IT Department', 'HR Department', 'Management'],
        timeline: {
          startDate: '2024-01-01',
          endDate: '2024-12-31'
        }
      },
      {
        id: 'change-2',
        name: 'Agile Methodology Adoption',
        type: 'process',
        status: 'planned',
        priority: 'medium',
        impact: 'medium',
        description: 'Transitioning from waterfall to agile development methodology',
        stakeholders: ['Development Team', 'Product Management'],
        timeline: {
          startDate: '2024-03-01',
          endDate: '2024-08-31'
        }
      }
    ];

    return res.status(200).json({
      success: true,
      data: changeInitiatives
    });
  } catch (error) {
    console.error('Change Management API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
