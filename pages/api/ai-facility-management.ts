import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action } = req.body;

    const mockData = {
      facilities: [
        {
          id: '1',
          name: 'Main Office Building',
          type: 'Office',
          status: 'operational',
          energyEfficiency: 85,
          riskScore: 15
        },
        {
          id: '2',
          name: 'Manufacturing Plant A',
          type: 'Manufacturing',
          status: 'operational',
          energyEfficiency: 78,
          riskScore: 25
        }
      ],
      analytics: {
        totalFacilities: 2,
        activeEquipment: 5,
        pendingTasks: 3,
        energyEfficiency: 85
      }
    };

    if (action === 'generate_report') {
      return res.status(200).json({
        success: true,
        data: mockData,
        analysis: {
          summary: 'Facility management system shows good performance',
          recommendations: [
            'Monitor energy efficiency in manufacturing plant',
            'Schedule preventive maintenance for critical equipment'
          ]
        }
      });
    }

    return res.status(200).json({
      success: true,
      data: mockData
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
} 