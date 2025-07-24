<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    port: process.env.PORT || 3002
  });
}
=======
import type { NextApiRequest, NextApiResponse } from 'next'; ; export export default function handler(req: NextApiRequest, res: NextApiResponse)       {; res.status(200).json({; status: healthy',; timestamp: new Date().toISOString(),; uptime: process.uptime(),; environment: process.env.NODE_ENV,; port: process.env.PORT || 3002; }); }
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
