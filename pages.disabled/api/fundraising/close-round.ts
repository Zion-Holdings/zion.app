import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  // TODO: hook up to email service (Resend/SendGrid) and investor list
  return res.status(200).json({ ok: true, message: 'Stakeholder emails sent' });
}