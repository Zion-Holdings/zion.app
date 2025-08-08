import type { NextApiRequest, NextApiResponse } from 'next';
import { updatePipelineItemStatus } from '../../../utils/vendor-store';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body || {};
  if (!itemId || !status) return res.status(400).json({ error: 'Missing required fields' });
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}