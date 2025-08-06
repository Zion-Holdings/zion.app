import { NextApiRequest, NextApiResponse } from 'next';

interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  status: 'active' | ''inactive' | 'on-leave'';
  performanceScore: number;
  satisfactionScore: number;
  retentionScore: number;
  recommendations: string[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { department, status } = req.body;

    const hrData = {
      employees: [
        {
          id: 'emp-1',
          name: 'John Smith',
          position: 'Senior Developer',
          department: 'Engineering',
          status: 'active',
          performanceScore: 90,
          satisfactionScore: 85,
          retentionScore: 85,
          recommendations: ['Consider promotion opportunities', 'Provide additional training', 'Increase recognition']
        },
        {
          id: 'emp-2',
          name: 'Sarah Johnson',
          position: 'Product Manager',
          department: 'Product',
          status: 'active',
          performanceScore: 95,
          satisfactionScore: 90,
          retentionScore: 90,
          recommendations: ['Fast-track for leadership', 'Mentor junior team members', 'Expand responsibilities']
        },
        {
          id: 'emp-3',
          name: 'Mike Chen',
          position: 'Marketing Specialist',
          department: 'Marketing',
          status: 'active',
          performanceScore: 85,
          satisfactionScore: 80,
          retentionScore: 75,
          recommendations: ['Provide career development', 'Increase engagement', 'Address concerns']
        }
      ],
      summary: {
        totalEmployees: 3,
        activeEmployees: 3,
        averagePerformance: 90,
        averageSatisfaction: 85,
        retentionRisk: 1
      }
    };

    res.status(200).json(hrData);
  } catch (error) {
    console.error('Error processing HR management request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}