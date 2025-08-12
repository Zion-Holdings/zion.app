import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

interface RedeemBody {
  userId: string;
  cost: number;
  reward?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { userId, cost, reward } = req.body as RedeemBody;
  if (!userId || typeof cost !== 'number') {
    return res.status(400).json({ error: 'Invalid request' });
  }

  const file = path.join(process.cwd(), 'data', 'points.json');
  let ledger: any[] = [];
  try {
    ledger = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    // file might not exist or be empty
  }

  const balance = ledger
    .filter((e) => e.user_id === userId)
    .reduce((sum, e) => sum + e.delta, 0);

  if (balance < cost) {
    return res.status(400).json({ error: 'Insufficient points' });
  }

  const entry = {
    id: randomUUID(),
    user_id: userId,
    delta: -cost,
    reason: 'redeem',
    order_id: reward || null,
    created_at: new Date().toISOString(),
  };
  ledger.push(entry);
  fs.writeFileSync(file, JSON.stringify(ledger, null, 2));

  return res.status(200).json({ success: true, balance: balance - cost });
}

