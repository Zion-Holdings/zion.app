import type { NextApiRequest, NextApiResponse } from 'next';
import { createDispute, readAllDisputes } from '../../../utils/fsdb';
import { parseUserFromRequest } from '../../../utils/auth';
import { DisputeCase, DisputeReason } from '../../../types/disputes';
import { generateCaseId } from '../../../utils/fsdb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);

  if (req.method === 'GET') {
    const all = await readAllDisputes();
    let filtered = all;
    if (user.role !== 'admin') {
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id);
    }
    return res.status(200).json({ disputes: filtered });
  }

  if (req.method === 'POST') {
    const now = new Date().toISOString();
    const {
      projectId,
      entityType,
      entityId,
      clientUserId,
      talentUserId,
      reason,
      reasonDetails,
      description,
    } = req.body || {};

    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const id = generateCaseId();
    const dispute: DisputeCase = {
      id,
      projectId: String(projectId),
      entityType,
      entityId,
      clientUserId: String(clientUserId),
      talentUserId: String(talentUserId),
      createdAt: now,
      updatedAt: now,
      status: 'Open',
      reason: reason as DisputeReason,
      reasonDetails,
      description,
      attachments: [],
      messages: [],
    };

    await createDispute(dispute);
    return res.status(201).json({ dispute });
  }

  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');
}