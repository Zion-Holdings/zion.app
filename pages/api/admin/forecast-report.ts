import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { requireRole } from '../../../utils/auth';

const REPORT = path.join(process.cwd(), 'data', 'reports', 'forecast', 'latest.json');

function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(REPORT)) return res.status(200).json({ forecast: [], risks: [], opportunities: [], recommendedActions: [] });
    const data = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
    res.status(200).json(data);
  } catch (e: any) {
    res.status(500).json({ error: e.message || 'Failed to read forecast report' });
  }
}

export default requireRole(['superadmin'], handler);