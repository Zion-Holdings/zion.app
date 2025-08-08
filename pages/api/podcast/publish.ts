import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const rssUrl = (process.env.SITE_URL || 'http://localhost:3000') + '/podcast.xml';
  return res.status(200).json({ ok: true, rssUrl });
}