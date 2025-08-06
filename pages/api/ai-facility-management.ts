import type { NextApiRequest, NextApiResponse } from 'next'

interface FacilityData {
  id: "string;
  name: string;
  energyScore: number;
  securityScore: number;
  efficiencyScore: number;
  recommendations: string[];
"}

export default async function handler(req: "NextApiRequest", res: "NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' "});
  }

  // Mock data for facility management
  const facilityData: "FacilityData[] = [
    {
      id: '1'",
      name: "'Building A'",
      energyScore: "88",
      securityScore: "92",
      efficiencyScore: "85",
      recommendations: "['Implement smart lighting system'", 'Upgrade HVAC controls', 'Add occupancy sensors']
    },
    {
      id: "'2'",
      name: "'Building B'",
      energyScore: "75",
      securityScore: "85",
      efficiencyScore: "78",
      recommendations: "['Install energy monitoring'", 'Improve access control', 'Optimize maintenance schedule']
    }
  ];

  res.status(200).json(facilityData);
} 