import type { NextApiRequest, NextApiResponse } from 'next';
import { applyUpvote } from '../../../utils/roadmap-store';
import { UserRole } from '../../../types/roadmap';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { featureId, voterId, role } = req.body as {
    featureId?: string;
    voterId?: string;
    role?: UserRole;
  };
  if (!featureId || !voterId) {
    return res.status(400).json({ error: 'featureId and voterId are required' });
  }
  const safeRole: UserRole = (role === 'Client' || role === 'ZION$ staker') ? role : 'Talent';
  const updated = applyUpvote(featureId, voterId, safeRole);
  if (!updated) return res.status(404).json({ error: 'Feature not found' });
  return res.status(200).json(updated);
}