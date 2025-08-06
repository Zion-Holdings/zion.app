import type { NextApiRequest, NextApiResponse } from 'next';

interface ContractTemplate {
  id: string;
  name: string;
  type: 'service' | 'employment' | 'partnership' | 'nda' | 'license';
  category: string;
  description: string;
  clauses: string[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Mock contract templates data
    const contractTemplates: ContractTemplate[] = [
      {
        id: 'contract-1',
        name: 'Software Development Agreement',
        type: 'service',
        category: 'Technology',
        description: 'Standard agreement for software development services',
        clauses: [
          'Scope of work definition',
          'Payment terms and schedule',
          'Intellectual property rights',
          'Confidentiality provisions',
          'Termination conditions'
        ]
      },
      {
        id: 'contract-2',
        name: 'Employment Contract',
        type: 'employment',
        category: 'Human Resources',
        description: 'Standard employment agreement template',
        clauses: [
          'Job description and responsibilities',
          'Compensation and benefits',
          'Working hours and location',
          'Non-compete agreement',
          'Termination procedures'
        ]
      }
    ];

    return res.status(200).json({
      success: true,
      data: contractTemplates
    });
  } catch (error) {
    console.error('Contract API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
