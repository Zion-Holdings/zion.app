import type { NextApiRequest, NextApiResponse } from 'next';
import { generateOriginSvg } from '../../../utils/nft';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { quote = 'Sovereign AI belongs to its creators and communities.', animated } = req.query;
  const svg = generateOriginSvg({
    quote: Array.isArray(quote) ? quote[0] : quote,
    animated: typeof animated === 'string' ? animated !== '0' : true
  });
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).send(svg);
}