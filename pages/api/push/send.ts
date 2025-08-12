import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import webpush from 'web-push';
import {logErrorToProduction} from '@/utils/productionLogger';


const FILE_PATH = path.join(process.cwd(), 'data', 'push-subscriptions.json');

webpush.setVapidDetails(
  process.env.VAPID_SUBJECT || 'mailto:example@domain.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || '',
  process.env.VAPID_PRIVATE_KEY || ''
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
  const { title, body, url } = req.body as { title?: unknown, body?: unknown, url?: unknown };
  const payload = JSON.stringify({ title, body, url });

  const subs = fs.existsSync(FILE_PATH)
    ? JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'))
    : [];

  await Promise.all(
    subs.map((sub: any) =>
      webpush.sendNotification(sub, payload).catch((err: any) => {
        logErrorToProduction('Push send failed', { data: err });
      })
    )
  );
      return res.status(200).json({ success: true });
}
