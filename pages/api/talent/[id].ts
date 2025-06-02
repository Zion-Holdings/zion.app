import { TALENT_PROFILES } from '@/data/talentData';

// Basic ObjectId validation helper mirroring mongoose.Types.ObjectId.isValid.
// This avoids adding mongoose as a dependency in this environment.
const isValidObjectId = (id: string) => /^[0-9a-fA-F]{24}$/.test(id);

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
  const id = typeof rawId === 'string' ? rawId : '';

  // Validate the id similar to `mongoose.Types.ObjectId.isValid`.
  if (!isValidObjectId(id)) {
    res.status(400).json({ error: 'Invalid id' });
    return;
  }

  let searchId = id;

  if (searchId && !searchId.startsWith('t-')) {
    searchId = `t-${searchId}`;
  }

  const profile = TALENT_PROFILES.find(t => t.id === searchId);

  if (!profile) {
    res.status(404).json({ error: 'Talent not found' });
    return;
  }

  const portfolio = profile.key_projects?.map(p => p.title) || [];

  res.status(200).json({
    id: profile.id,
    name: profile.full_name,
    bio: profile.bio,
    skills: profile.skills,
    portfolio,
  });
}
