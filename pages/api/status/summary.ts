import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const baseUrl = process.env.NEXT_PUBLIC_STATUS_PAGE_URL || 'https://status.ziontechgroup.com';
  const summaryUrl = `${baseUrl.replace(/\/$/, '')}/api/summary.json`;

  try {
    const response = await fetch(summaryUrl);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch summary' });
    }
    const data = await response.json();
    const uptime =
      typeof data.uptime === 'number'
        ? data.uptime
        : typeof data.summary?.uptime === 'number'
        ? data.summary.uptime
        : typeof data.uptimePercent === 'number'
        ? data.uptimePercent
        : null;

    res.status(200).json({ uptime });
  } catch (err) {
    console.warn('Failed to fetch Upptime summary', err);
    res.status(500).json({ error: 'Failed to fetch summary' });
  }
}
