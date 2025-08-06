import React from 'react'

interface FacilityPlan {
  id: string;
  name: string;
  type: 'infrastructure' | 'workforce' | 'technology' | 'financial';'
  currentCapacity: number;
  targetCapacity: number;
  utilization: number;
  recommendations: string[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {'
    return res.status(405).json({ error: 'Method not allowed' });'
  }

  // Mock data for capacity planning
  const capacityPlans: FacilityPlan[] = [
    {
      id: '1','
      name: 'Data Center Expansion','
      type: 'infrastructure','
      currentCapacity: 80,
      targetCapacity: 120,
      utilization: 85,
      recommendations: ['Add server racks', 'Upgrade cooling system', 'Implement redundancy']'
    },
    {
      id: '2','
      name: 'Development Team Growth','
      type: 'workforce','
      currentCapacity: 15,
      targetCapacity: 25,
      utilization: 90,
      recommendations: ['Hire senior developers', 'Expand office space', 'Improve onboarding process']'
    }
  ];

  res.status(200).json(capacityPlans);
}