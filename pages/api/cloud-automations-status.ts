import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const dir = path.resolve(process.cwd(), 'data/cloud-automations');
  const files = [
    'summary.json',
    'whitepaper-publisher.json',
    'multiverse-health-monitor.json',
    'governance-snapshot-syncer.json',
    'ai-cache-refresher.json',
    'talent-passport-evaluator.json',
  ];
  const data: Record<string, any> = {};
  for (const f of files) {
    try {
      const fp = path.join(dir, f);
      if (fs.existsSync(fp)) {
        data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'));
      }
    } catch (e) {
      // ignore
    }
  }
  res.status(200).json({ ok: true, data });
}