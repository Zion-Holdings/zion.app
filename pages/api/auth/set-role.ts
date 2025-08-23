import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const role = (req.query.role as string) || 'investor';
  const valid = ['investor','franchisee','superadmin'];
  if (!valid.includes(role)) {
    res.status(400).json({ error: 'Invalid role' });
    return;
  }
  res.setHeader('Set-Cookie', `zion_role=${role}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`);
  res.status(200).json({ ok: true, role });
}