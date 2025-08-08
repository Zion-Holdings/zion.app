import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { type, prompt } = req.body || {};
  const output = `Generated (${type}):\n\n${prompt || ''}\n\n— ZionGPT`;
  return res.status(200).json({ ok: true, output });
}