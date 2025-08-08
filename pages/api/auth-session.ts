import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Replace with real auth integration (e.g., Supabase)
  res.status(200).json({ authenticated: true, user: { role: 'founder' } });
}