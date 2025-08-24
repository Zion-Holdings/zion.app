import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { ethers } from 'ethers';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { message, signature, address, chainId } = req.body || {};
  if (!message || !signature || !address) return res.status(400).json({ error: 'Missing fields' });
  try {
    const recovered = ethers.utils.verifyMessage(message, signature).toLowerCase();
    if (recovered !== String(address).toLowerCase()) {
      return res.status(401).json({ error: 'Invalid signature' });
    }
    const cookieHeader = req.headers.cookie || '';
    const match = cookieHeader.match(/siwe-nonce=([^;]+)/);
    if (!match) return res.status(400).json({ error: 'Missing nonce' });
    const nonce = match[1];
    if (!String(message).includes(`Nonce: ${nonce}`)) return res.status(400).json({ error: 'Nonce mismatch' });

    const token = jwt.sign({ sub: address.toLowerCase(), chain: 'evm', chainId }, JWT_SECRET, { expiresIn: '7d' });
    res.setHeader('Set-Cookie', `web3-session=${token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${7 * 24 * 3600}`);
    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Verify failed' });
  }
}