import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { address, signature } = req.body || {};
  if (!address || !signature) return res.status(400).json({ error: 'Missing address or signature' });
  // In production: verify signature, mint or issue POAP
  console.log('[NFT Claim] address:', address, 'signature:', signature.slice(0, 18) + '…');
  return res.status(200).json({ ok: true });
}