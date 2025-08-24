import type { NextApiRequest, NextApiResponse } from 'next';
import { readProposals, upsertProposal } from '../../../../utils/governanceStorage';

const ADMIN_ADDRESSES = (process.env.GOVERNANCE_ADMINS || '').split(',').map(a => a.toLowerCase()).filter(Boolean);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { id, admin, txHash } = req.body as { id: string; admin: string; txHash: string };
  if (!id || !admin || !txHash) return res.status(400).json({ error: 'Missing fields' });
  if (!ADMIN_ADDRESSES.includes(admin.toLowerCase())) return res.status(403).json({ error: 'Not authorized' });
  const p = readProposals().find(p => p.id === id);
  if (!p) return res.status(404).json({ error: 'Not found' });
  p.executedTxHash = txHash;
  upsertProposal(p);
  return res.status(200).json({ proposal: p });
}