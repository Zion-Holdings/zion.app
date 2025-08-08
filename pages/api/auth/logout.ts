import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Set-Cookie', 'web3-session=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0');
  res.status(200).json({ ok: true });
}