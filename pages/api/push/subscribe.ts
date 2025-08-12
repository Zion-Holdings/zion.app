import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import {logErrorToProduction} from '@/utils/productionLogger';


const FILE_PATH = path.join(process.cwd(), 'data', 'push-subscriptions.json');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const subs = fs.existsSync(FILE_PATH)
      ? JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'))
      : [];
    subs.push(req.body);
    fs.writeFileSync(FILE_PATH, JSON.stringify(subs, null, 2));
    return res.status(200).json({ success: true });
  } catch (err) {
    logErrorToProduction('Failed to save push subscription', { data: err });
    return res.status(500).json({ error: 'Failed to save subscription' });
  }
}
