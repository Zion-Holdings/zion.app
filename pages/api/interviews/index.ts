import type { NextApiRequest, NextApiResponse } from 'next';
import { createInterview, listInterviewsForUser } from '../../../utils/supabase/interviews';
import type { CreateInterviewInput } from '../../../utils/types/interview';

function getCurrentUserId(req: NextApiRequest): string | null {
  // Placeholder: read from header or query for demo
  const fromHeader = (req.headers['x-user-id'] as string) || '';
  const fromQuery = (req.query.userId as string) || '';
  return fromHeader || fromQuery || null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = getCurrentUserId(req);
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized: missing user identity' });
  }

  if (req.method === 'GET') {
    try {
      const data = await listInterviewsForUser(userId);
      return res.status(200).json({ interviews: data });
    } catch (e: any) {
      return res.status(500).json({ error: e.message });
    }
  }

  if (req.method === 'POST') {
    try {
      const body = req.body as CreateInterviewInput;
      if (!body?.clientId || !body?.talentId || !body?.startTimeIso || !body?.durationMinutes) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      if (userId !== body.clientId) {
        return res.status(403).json({ error: 'Only the client can request an interview' });
      }
      const created = await createInterview(body);
      return res.status(201).json({ interview: created });
    } catch (e: any) {
      return res.status(500).json({ error: e.message });
    }
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).end('Method Not Allowed');
}