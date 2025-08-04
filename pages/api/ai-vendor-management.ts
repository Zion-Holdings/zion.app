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
      vendors: [
        {
          id: '1',
          name: 'TechCorp Solutions',
          category: 'Technology',
          rating: 4.8,
          performance: 95,
          riskScore: 12,
          status: 'active',
          contractValue: 150000
        },
        {
          id: '2',
          name: 'Global Logistics Ltd',
          category: 'Logistics',
          rating: 4.2,
          performance: 87,
          riskScore: 28,
          status: 'active',
          contractValue: 75000
        }
      ],
      analytics: {
        totalVendors: 2,
        activeContracts: 2,
        averagePerformance: 89,
        totalValue: 225000
      }
    };

    if (action === 'generate_report') {
      return res.status(200).json({
        success: true,
        data: mockData,
        analysis: {
          summary: 'Vendor management system shows positive trends',
          recommendations: [
            'Expand partnership with TechCorp Solutions',
            'Monitor Global Logistics performance'
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