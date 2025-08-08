import type { NextApiRequest, NextApiResponse } from 'next';
import { devNetState } from '@/utils/devnet/state';
import { withRateLimit } from '@/utils/api/rateLimit';

function getAddress(req: NextApiRequest): string | null {
  if (req.method === 'GET') {
    return (req.query.address as string) || null;
  }
  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      return (body?.address as string) || null;
    } catch {
      return null;
    }
  }
  return null;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = getAddress(req);
  if (!address) {
    res.status(400).json({ error: 'address is required' });
    return;
  }

  if (req.method === 'GET') {
    const balance = devNetState.faucet[address] || 0;
    res.status(200).json({ address, balance });
    return;
  }

  if (req.method === 'POST') {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const amount = Number(body?.amount ?? 100);
    if (!Number.isFinite(amount) || amount <= 0 || amount > 10000) {
      res.status(400).json({ error: 'invalid amount' });
      return;
    }
    devNetState.faucet[address] = (devNetState.faucet[address] || 0) + amount;
    res.status(200).json({ address, minted: amount, balance: devNetState.faucet[address] });
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}

export default withRateLimit(handler, { windowMs: 60_000, max: 30 });