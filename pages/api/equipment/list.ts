import type { NextApiRequest, NextApiResponse } from 'next';
import { filterByCountry, sortByCountryFirst } from '../../../utils/geo/country';
import { geolocateIp, getIpFromRequest } from '../../../utils/geo/ip';

type Equipment = { id: string; name: string; location: string };

const EQUIPMENT: Equipment[] = [
  { id: 'cam-br-1', name: '4K Camera', location: 'São Paulo, BR' },
  { id: 'mic-us-1', name: 'Podcast Microphone', location: 'Austin, US' },
  { id: 'rig-de-1', name: 'Camera Rig', location: 'Berlin, DE' },
  { id: 'lights-pt-1', name: 'LED Lights', location: 'Lisbon, PT' },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const mode = String(req.query.mode || 'local');
    let countryCode = String(req.query.countryCode || '').toUpperCase();

    if (!countryCode && mode !== 'global') {
      const ip = getIpFromRequest(req);
      const geo = await geolocateIp(ip);
      countryCode = (geo.countryCode || '').toUpperCase();
    }

    let results = EQUIPMENT;
    if (mode === 'local') {
      results = filterByCountry(results, countryCode);
    } else if (mode === 'country') {
      results = filterByCountry(results, countryCode);
    } else {
      results = sortByCountryFirst(results, countryCode);
    }

    res.status(200).json({ equipment: results, countryCode });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to list equipment' });
  }
}