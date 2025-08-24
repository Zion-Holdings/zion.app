import type { NextApiRequest, NextApiResponse } from 'next';
import { requireRole } from '../../../utils/auth';

function save(req: NextApiRequest, res: NextApiResponse) {
  // In a real implementation, persist to DB
  res.status(200).json({ ok: true });
}

export default requireRole(['franchisee','superadmin','investor'], save);