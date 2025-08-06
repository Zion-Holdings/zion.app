import type { NextApiRequest, NextApiResponse } from 'next';

interface ContractTemplate {
  id: string;
  name: string;
  type: 'service' | 'employment' | 'partnership' | 'nda' | 'license';
  category: string;
  description: string;
  clauses: string[];
  terms: string[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Mock data for contract templates
  const contractTemplates: ContractTemplate[] = [
    {
      id: '1',
      name: 'Service Agreement',
      type: 'service',
      category: 'Business',
      description: 'Standard service agreement template',
      clauses: ['Scope of services', 'Payment terms', 'Termination clause'],
      terms: ['30-day payment terms', '90-day notice for termination', 'Confidentiality agreement']
    },
    {
      id: '2',
      name: 'Employment Contract',
      type: 'employment',
      category: 'HR',
      description: 'Standard employment contract template',
      clauses: ['Job description', 'Compensation', 'Benefits'],
      terms: ['At-will employment', 'Non-compete clause', 'Intellectual property rights']
    }
  ];

  res.status(200).json(contractTemplates);
}
