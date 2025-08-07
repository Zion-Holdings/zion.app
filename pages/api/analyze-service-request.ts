import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { serviceRequest } = req.body;
    
    const analysis = {
      id: 'service-analysis-1',
      requestId: serviceRequest?.id || 'unknown',
      serviceType: 'development',
      estimatedHours: 120,
      priority: 'high',
      recommendations: ['Use modern tech stack', 'Implement CI/CD', 'Add monitoring']
    };

    return res.status(200).json(analysis);
  } catch (error) {
    console.error('Service Analysis API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}