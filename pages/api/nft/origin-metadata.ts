import type { NextApiRequest, NextApiResponse } from 'next';
import { buildOriginMetadata, OriginNftInput } from '../../../utils/nft';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const input = (req.body || {}) as OriginNftInput;

    const protocol = (req.headers['x-forwarded-proto'] as string) || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost:3000';
    const baseUrl = `${protocol}://${host}`;

    const { metadata, computedZionHash, imageUrl, animationUrl } = buildOriginMetadata(baseUrl, input);

    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ metadata, computedZionHash, imageUrl, animationUrl });
  } catch (error: any) {
    console.error('origin-metadata error', error);
    return res.status(500).json({ error: 'Failed to build metadata' });
  }
}