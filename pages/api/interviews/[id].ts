import type { NextApiRequest, NextApiResponse } from 'next';
import { getInterviewById, updateInterview, proposeNewTime } from '../../../utils/supabase/interviews';

function getCurrentUserId(req: NextApiRequest): string | null {
  const fromHeader = (req.headers['x-user-id'] as string) || '';
  const fromQuery = (req.query.userId as string) || '';
  return fromHeader || fromQuery || null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = getCurrentUserId(req);
  if (!userId) return res.status(401).json({ error: 'Unauthorized' });

  const { id } = req.query as { id: string };
  if (!id) return res.status(400).json({ error: 'Missing id' });

  const interview = await getInterviewById(id);
  if (!interview) return res.status(404).json({ error: 'Not found' });
  if (![interview.clientId, interview.talentId].includes(userId)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  if (req.method === 'GET') {
    return res.status(200).json({ interview });
  }

  if (req.method === 'PUT') {
    try {
      const { action, ...rest } = req.body || {};
      if (action === 'accept') {
        const updated = await updateInterview(id, { status: 'confirmed', ...(rest || {}) });
        return res.status(200).json({ interview: updated });
      }
      if (action === 'decline') {
        const updated = await updateInterview(id, { status: 'declined' });
        return res.status(200).json({ interview: updated });
      }
      if (action === 'propose') {
        if (!rest?.proposedTimeIso) return res.status(400).json({ error: 'Missing proposedTimeIso' });
        const updated = await proposeNewTime(id, rest.proposedTimeIso, rest.durationMinutes);
        return res.status(200).json({ interview: updated });
      }
      // generic update
      const updated = await updateInterview(id, rest);
      return res.status(200).json({ interview: updated });
    } catch (e: any) {
      return res.status(500).json({ error: e.message });
    }
  }

  res.setHeader('Allow', 'GET, PUT');
  return res.status(405).end('Method Not Allowed');
}