import type { NextApiRequest, NextApiResponse } from 'next';
import { TALENT_PROFILES } from '../../../data/talent';
import { filterByCountry, sortByCountryFirst } from '../../../utils/geo/country';
import { geolocateIp, getIpFromRequest } from '../../../utils/geo/ip';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const mode = String(req.query.mode || 'local');
    let countryCode = String(req.query.countryCode || '').toUpperCase();

    if (!countryCode && mode !== 'global') {
      const ip = getIpFromRequest(req);
      const geo = await geolocateIp(ip);
      countryCode = (geo.countryCode || '').toUpperCase();
    }

    let results = TALENT_PROFILES;
    if (mode === 'local') {
      results = filterByCountry(results, countryCode);
    } else if (mode === 'country') {
      results = filterByCountry(results, countryCode);
    } else {
      results = sortByCountryFirst(results, countryCode);
    }

    res.status(200).json({ profiles: results, countryCode });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to list talent' });
  }
}