import type { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '../../../utils/auth';

function list(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    instances: [
      { name: 'Zion Africa', status: 'active' },
      { name: 'Zion LATAM', status: 'provisioning' },
      { name: 'Zion HealthTech', status: 'active' },
    ],
  });
}

export default requireRole(['superadmin'], list);