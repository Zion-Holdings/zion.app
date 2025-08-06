import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action } = req.body;

    // Simulate HR data
    const employees = [
      {
        id: 'emp-1',
        name: 'John Doe',
        position: 'Software Engineer',
        department: 'Engineering',
        performanceScore: 90,
        satisfactionScore: 85,
        retentionScore: 85,
        recommendations: ['Consider promotion opportunities', 'Provide additional training', 'Increase recognition']
      },
      {
        id: 'emp-2',
        name: 'Jane Smith',
        position: 'Product Manager',
        department: 'Product',
        performanceScore: 95,
        satisfactionScore: 90,
        retentionScore: 90,
        recommendations: ['Excellent performance', 'Consider leadership role', 'Mentor junior team members']
      }
    ];

    switch (action) {
      case 'getEmployees':
        return res.status(200).json({
          success: true,
          data: employees
        });

      case 'getAnalytics':
        return res.status(200).json({
          success: true,
          analytics: {
            totalEmployees: employees.length,
            averagePerformance: employees.reduce((sum, e) => sum + e.performanceScore, 0) / employees.length,
            averageSatisfaction: employees.reduce((sum, e) => sum + e.satisfactionScore, 0) / employees.length
          }
        });

      default:
        return res.status(400).json({ error: 'Invalid action' });
    }
  } catch (error) {
    console.error('AI HR Management API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}