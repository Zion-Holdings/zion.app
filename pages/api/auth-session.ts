import type { NextApiRequest, NextApiResponse } from 'next';
import { requireAdminAuth, isAdmin } from '../../../utils/adminAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAuthorized = requireAdminAuth();
  if (!isAuthorized) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  res.status(200).json({ message: 'OK' });
}