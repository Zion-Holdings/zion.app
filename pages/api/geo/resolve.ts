import type { NextApiRequest, NextApiResponse } from 'next';
import { geolocateIp, getIpFromRequest } from '../../../utils/geo/ip';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const ip = getIpFromRequest(req);
    const geo = await geolocateIp(ip);
    res.status(200).json(geo);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Geo resolve failed' });
  }
}