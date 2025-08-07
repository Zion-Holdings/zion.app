import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const contracts = [
      {
        id: 'contract-1',
        type: 'service-agreement',
        status: 'active',
        value: 50000
      },
      {
        id: 'contract-2',
        type: 'maintenance',
        status: 'pending',
        value: 25000
      }
    ];

    return res.status(200).json(contracts);
  } catch (error) {
    console.error('Contract API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}