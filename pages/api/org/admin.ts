import type { NextApiRequest, NextApiResponse } from 'next';
import { readOrgData, writeOrgData } from '../../../utils/org-data';
import type { OrgData, BasePerson } from '../../../types/org';

const ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev-admin-key';

type AdminAction =
  | { type: 'invite'; section: keyof OrgData; person: BasePerson }
  | { type: 'promote'; section: keyof OrgData; id: string; updates: Partial<BasePerson> }
  | { type: 'deactivate'; section: keyof OrgData; id: string };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const key = req.headers['x-admin-key'];
  if (key !== ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const action = req.body as AdminAction;
  const data = readOrgData();

  if (action.type === 'invite') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [];
    // prevent duplicates
    if (arr.some((p) => p.id === action.person.id)) {
      return res.status(400).json({ error: 'ID already exists' });
    }
    arr.push({ ...action.person, active: true });
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
    return res.status(200).json({ ok: true });
  }

  if (action.type === 'promote') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [];
    const idx = arr.findIndex((p) => p.id === action.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    arr[idx] = { ...arr[idx], ...action.updates };
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
    return res.status(200).json({ ok: true });
  }

  if (action.type === 'deactivate') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [];
    const idx = arr.findIndex((p) => p.id === action.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    arr[idx] = { ...arr[idx], active: false };
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
    return res.status(200).json({ ok: true });
  }

  return res.status(400).json({ error: 'Unknown action' });
}