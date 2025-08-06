import type { NextApiRequest, NextApiResponse } from 'next';

interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  hireDate: string;
  salary: number;
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
    const { action, employeeId } = req.body;

    const hrData = {
      employees: [
        {
          id: 'emp-1',
          name: 'John Smith',
          position: 'Senior Developer',
          department: 'Engineering',
          hireDate: '2022-03-15',
          salary: 85000,
          performanceScore: 92,
          satisfactionScore: 88,
          retentionScore: 85,
          recommendations: ['Consider promotion opportunities', 'Provide additional training', 'Increase recognition']
        },
        {
          id: 'emp-2',
          name: 'Sarah Johnson',
          position: 'Product Manager',
          department: 'Product',
          hireDate: '2021-08-20',
          salary: 95000,
          performanceScore: 88,
          satisfactionScore: 92,
          retentionScore: 90,
          recommendations: ['Continue career development', 'Mentor junior team members', 'Lead new initiatives']
        }
      ],
      analytics: {
        totalEmployees: 45,
        averagePerformance: 87,
        averageSatisfaction: 89,
        retentionRate: 94,
        turnoverRate: 6
      }
    };

    return res.status(200).json({
      success: true,
      data: hrData
    });
  } catch (error) {
    console.error('Error processing HR management request:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}