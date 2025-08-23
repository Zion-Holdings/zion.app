import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { requireRole } from '../../../utils/auth';

const REPORT_PATH = path.join(process.cwd(), 'data', 'reports', 'feedback', 'latest.json');

function getLatest(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(REPORT_PATH)) {
      res.status(200).json({ groupedByFeature: {}, topInsights: [], improvementBacklog: [] });
      return;
    }
    const json = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8'));
    res.status(200).json(json);
  } catch (e: any) {
    res.status(500).json({ error: e.message || 'Failed to read report' });
  }
}

export default requireRole(['superadmin'], getLatest);