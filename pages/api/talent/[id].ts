import { TALENT_PROFILES } from '@/data/talentData';

// Generic request/response types so this file can run without Next.js
interface Req {
  method?: string;
  query?: { id?: string };
}
interface JsonRes {
  statusCode?: number;
  setHeader: (name: string, value: string) => void;
  end: (data?: any) => void;
  status: (code: number) => JsonRes;
  json: (data: any) => void;
}

export default function handler(req: Req, res: JsonRes) {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  const rawId = req.query?.id;
  let searchId = typeof rawId === 'string' ? rawId : '';

  if (searchId && !searchId.startsWith('t-')) {
    searchId = `t-${searchId}`;
  }

  const profile = TALENT_PROFILES.find(t => t.id === searchId);

  if (!profile) {
    res.status(404).json({ error: 'Talent not found' });
    return;
  }

  const first = profile.full_name.split(' ')[0].toLowerCase();
  const social = {
    twitter: `https://twitter.com/${first}`,
    linkedin: `https://linkedin.com/in/${first}`,
  };

  res.status(200).json({ profile: { ...profile, social } });
}
