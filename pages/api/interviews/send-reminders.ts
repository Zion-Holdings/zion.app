import type { NextApiRequest, NextApiResponse } from 'next';
import { listInterviewsForUser } from '../../../utils/supabase/interviews';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string);
  if (!userId) return res.status(401).json({ error: 'Unauthorized' });

  const upcoming = await listInterviewsForUser(userId);
  const now = Date.now();
  const in30 = now + 30 * 60000;
  const toRemind = upcoming.filter((i) => {
    const t = new Date(i.startTimeIso).getTime();
    return i.status === 'confirmed' && t >= now && t <= in30;
  });

  // Stub: in real impl, send emails/notifications
  return res.status(200).json({ reminders: toRemind.map((i) => ({ id: i.id, startTimeIso: i.startTimeIso })) });
}