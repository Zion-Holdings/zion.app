import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req);
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const dataDir = path.join(process.cwd(), 'data', 'admin');
  const statusPath = path.join(dataDir, 'agents-status.json');
  const insightsPath = path.join(dataDir, 'insights.json');

  const status = fs.existsSync(statusPath)
    ? JSON.parse(fs.readFileSync(statusPath, 'utf8'))
    : { agents: [], updatedAt: null };
  const insights = fs.existsSync(insightsPath)
    ? JSON.parse(fs.readFileSync(insightsPath, 'utf8'))
    : { items: [], updatedAt: null };

  res.status(200).json({ status, insights });
}