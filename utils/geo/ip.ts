import type { NextApiRequest } from 'next';

export type GeoResult = {
  ip: string;
  countryCode?: string; // e.g., BR
  country?: string;     // e.g., Brazil
  region?: string;
  city?: string;
};

export async function geolocateIp(ip?: string): Promise<GeoResult> {
  try {
    const query = ip && ip !== '::1' && ip !== '127.0.0.1' ? ip : '';
    const res = await fetch(`https://ipapi.co/${query}/json/`);
    const data = await res.json();
    return {
      ip: data.ip || ip || '',
      countryCode: data.country_code || data.country || undefined,
      country: data.country_name || data.country || undefined,
      region: data.region || data.region_code || undefined,
      city: data.city || undefined,
    };
  } catch {
    return { ip: ip || '' };
  }
}

export function getIpFromRequest(req: NextApiRequest): string | undefined {
  const xff = (req.headers['x-forwarded-for'] as string) || '';
  const parts = xff.split(',').map((p) => p.trim());
  return parts[0] || (req.socket as any)?.remoteAddress || undefined;
}