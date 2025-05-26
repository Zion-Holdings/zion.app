import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).setHeader('Allow', 'POST').end('Method Not Allowed');
    return;
  }

  const { productId } = req.body as { productId?: string };
  if (!productId) {
    res.status(400).json({ error: 'Missing productId' });
    return;
  }

  // In this demo environment we return a mock session id
  const sessionId = `sess_${productId}`;
  res.status(200).json({ sessionId });
}
