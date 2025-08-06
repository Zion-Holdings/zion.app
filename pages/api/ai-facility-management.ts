import { NextApiRequest, NextApiResponse } from 'next';

interface Facility {
  id: string;
  name: string;
  type: 'office' | 'warehouse' | 'data-center' | 'manufacturing';
  status: 'operational' | 'maintenance' | 'offline';
  capacity: number;
  utilization: number;
  energyScore: number;
  securityScore: number;
  efficiencyScore: number;
  recommendations: string[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { facilityType, status } = req.body;

    const facilityData = {
      facilities: [
        {
          id: 'facility-1',
          name: 'Main Office Building',
          type: 'office',
          status: 'operational',
          capacity: 200,
          utilization: 85,
          energyScore: 88,
          securityScore: 92,
          efficiencyScore: 85,
          recommendations: ['Implement smart lighting system', 'Upgrade HVAC controls', 'Add occupancy sensors']
        },
        {
          id: 'facility-2',
          name: 'Data Center',
          type: 'data-center',
          status: 'operational',
          capacity: 1000,
          utilization: 92,
          energyScore: 95,
          securityScore: 98,
          efficiencyScore: 90,
          recommendations: ['Optimize cooling systems', 'Implement power management', 'Add redundancy']
        },
        {
          id: 'facility-3',
          name: 'Warehouse',
          type: 'warehouse',
          status: 'maintenance',
          capacity: 5000,
          utilization: 60,
          energyScore: 75,
          securityScore: 85,
          efficiencyScore: 70,
          recommendations: ['Upgrade lighting to LED', 'Improve security systems', 'Optimize layout']
        }
      ],
      summary: {
        totalFacilities: 3,
        operationalFacilities: 2,
        averageUtilization: 79,
        averageEnergyScore: 86,
        criticalMaintenance: 1
      }
    };

    res.status(200).json(facilityData);
  } catch (error) {
    console.error('Error processing facility management request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 
 