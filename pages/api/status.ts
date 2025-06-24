import type { NextApiRequest, NextApiResponse } from 'next';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  description: string;
  lastChecked: string;
}

const SERVICES: ServiceStatus[] = [
  {
    name: 'Marketplace API',
    status: 'operational',
    description: 'Product listings and search functionality',
    lastChecked: new Date().toISOString(),
  },
  {
    name: 'Authentication Service',
    status: 'operational',
    description: 'User login and registration',
    lastChecked: new Date().toISOString(),
  },
  {
    name: 'Payment Processing',
    status: 'operational',
    description: 'Checkout and payment handling',
    lastChecked: new Date().toISOString(),
  },
  {
    name: 'Talent Directory',
    status: 'operational',
    description: 'AI talent profiles and matching',
    lastChecked: new Date().toISOString(),
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServiceStatus[]>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  return res.status(200).json(SERVICES);
}
