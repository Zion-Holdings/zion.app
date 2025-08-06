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

  const contractTemplates: ContractTemplate[] = [
    {
      id: 'contract-1',
      name: 'Software Development Agreement',
      type: 'service',
      category: 'Technology',
      description: 'Standard agreement for software development services',
      clauses: [
        'Scope of work',
        'Payment terms',
        'Intellectual property rights',
        'Confidentiality',
        'Termination',
      ],
    },
    {
      id: 'contract-2',
      name: 'Employment Contract',
      type: 'employment',
      category: 'Human Resources',
      description: 'Standard full-time employment contract template',
      clauses: [
        'Job description',
        'Compensation & benefits',
        'Working hours',
        'Non-compete',
        'Termination',
      ],
    },
  ];

  return res.status(200).json({ success: true, data: contractTemplates });
}
