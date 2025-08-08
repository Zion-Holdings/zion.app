import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { deck, format } = req.body || {};
  if (!deck || !format) return res.status(400).json({ error: 'Missing payload' });

  // TODO: Implement real PDF export (e.g., puppeteer) and Notion API integration
  return res.status(200).json({ ok: true, message: `Export queued: ${format}` });
}