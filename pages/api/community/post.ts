import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const token = req.cookies?.['sb-access-token'];
  if (!token) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  res.status(200).json({ success: true });
}
