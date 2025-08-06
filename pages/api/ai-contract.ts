import type { NextApiRequest, NextApiResponse } from 'next';

interface Contract {
  id: string;
  name: string;
  type: 'service' | 'product' | 'partnership' | 'employment';
  status: 'draft' | 'pending' | 'active' | 'expired' | 'terminated';
  value: number;
  startDate: string;
  endDate: string;
  parties: string[];
  terms: string[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { contractType, status } = req.body;

    const contractData = {
      contracts: [
        {
          id: 'contract-1',
          name: 'Software Development Agreement',
          type: 'service',
          status: 'active',
          value: 50000,
          startDate: '2024-01-01',
          endDate: '2024-12-31',
          parties: ['Zion Tech', 'Client Corp'],
          terms: [
            'Monthly deliverables',
            'Quality assurance requirements',
            'Intellectual property rights'
          ]
        },
        {
          id: 'contract-2',
          name: 'Cloud Infrastructure Partnership',
          type: 'partnership',
          status: 'pending',
          value: 25000,
          startDate: '2024-03-01',
          endDate: '2025-02-28',
          parties: ['Zion Tech', 'Cloud Provider'],
          terms: [
            'Service level agreements',
            'Data security requirements',
            'Cost sharing arrangements'
          ]
        },
        {
          id: 'contract-3',
          name: 'Employment Agreement',
          type: 'employment',
          status: 'active',
          value: 80000,
          startDate: '2024-01-15',
          endDate: '2024-12-31',
          parties: ['Zion Tech', 'Senior Developer'],
          terms: [
            'Full-time employment',
            'Benefits package',
            'Non-compete clause'
          ]
        }
      ],
      summary: {
        totalContracts: 3,
        activeContracts: 2,
        totalValue: 155000,
        averageValue: 51667,
        expiringSoon: 1
      }
    };

    res.status(200).json(contractData);
  } catch (error) {
    console.error('Error processing contract request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}