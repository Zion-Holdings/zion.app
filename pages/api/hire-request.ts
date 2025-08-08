import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, talentSlug, projectOverview, timeline, budgetRange } = req.body || {};
  if (!name || !email || !talentSlug) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Here we could trigger an Operator workflow, send an email, etc.
  // For now, return success.
  return res.status(200).json({ ok: true, received: { name, email, talentSlug, projectOverview, timeline, budgetRange } });
}