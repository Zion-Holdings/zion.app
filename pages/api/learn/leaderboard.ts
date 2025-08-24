import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const usersPath = path.join(process.cwd(), 'data', 'learn', 'users.json');

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    const entries = Object.values(users as any).map((u: any) => ({
      userId: u.userId,
      name: u.name || u.userId,
      certifications: u.certifications?.length || 0,
      points: (u.certifications?.length || 0) * 100 + Object.values(u.progress || {}).reduce((acc: number, p: any) => acc + (p.percent || 0), 0)
    }));

    const top = entries.sort((a: any, b: any) => b.points - a.points).slice(0, 20);
    res.status(200).json({ leaderboard: top });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load leaderboard' });
  }
}