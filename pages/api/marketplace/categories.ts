<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Mock API response
  res.status(200).json({
    message: 'API endpoint working',
    endpoint: 'marketplace/categories',
    method: req.method,
    timestamp: new Date().toISOString()
  });
}
=======
import type { NextApiRequest, NextApiResponse } from 'next'; ; export export default function handler(req: NextApiRequest, res: NextApiResponse)       {; if (req.method !== 'GET' && req.method !== 'POST') {; return res.status(405).json({ error: Method not allowed' }); }; // Mock API response; res.status(200).json({; message: 'API endpoint working',; endpoint: marketplace/categories',; method: req.method,; timestamp: new Date().toISOString(); }) }
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
