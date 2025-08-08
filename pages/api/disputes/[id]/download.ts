import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { getDisputeById } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, fileName } = req.query as { id?: string; fileName?: string };
  if (!id || !fileName || typeof id !== 'string' || typeof fileName !== 'string') {
    return res.status(400).json({ error: 'Invalid parameters' });
  }
  const user = parseUserFromRequest(req);

  const dispute = await getDisputeById(id);
  if (!dispute) return res.status(404).json({ error: 'Not found' });
  try {
    ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
  } catch (e: any) {
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
  }
  const att = dispute.attachments.find(a => a.fileName === fileName);
  if (!att) return res.status(404).json({ error: 'Attachment not found' });

  const stat = fs.statSync(att.path);
  res.setHeader('Content-Type', att.mimeType);
  res.setHeader('Content-Length', String(stat.size));
  res.setHeader('Content-Disposition', `attachment; filename="${path.basename(att.fileName)}"`);
  const stream = fs.createReadStream(att.path);
  stream.pipe(res);
}