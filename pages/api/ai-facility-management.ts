import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action } = req.body;

    // Simulate facility data
    const facilities = [
      {
        id: 'facility-1',
        name: 'Main Office Building',
        type: 'Office',
        status: 'operational',
        capacity: 500,
        utilization: 85,
        energyEfficiency: 92,
        securityScore: 95
      },
      {
        id: 'facility-2',
        name: 'Data Center',
        type: 'Technology',
        status: 'operational',
        capacity: 200,
        utilization: 95,
        energyEfficiency: 78,
        securityScore: 98
      }
    ];

    switch (action) {
      case 'getFacilities':
        return res.status(200).json({
          success: true,
          data: facilities
        });

      case 'getAnalytics':
        return res.status(200).json({
          success: true,
          analytics: {
            totalFacilities: facilities.length,
            operationalFacilities: facilities.filter(f => f.status === 'operational').length,
            averageUtilization: facilities.reduce((sum, f) => sum + f.utilization, 0) / facilities.length
          }
        });

      default:
        return res.status(400).json({ error: 'Invalid action' });
    }
  } catch (error) {
    console.error('AI Facility Management API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 