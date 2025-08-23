import type { NextApiRequest, NextApiResponse } from 'next';
import https from 'https';

function postJson(urlString: string, payload: any): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const url = new URL(urlString);
      const data = Buffer.from(JSON.stringify(payload));
      const req = https.request(
        {
          method: 'POST',
          hostname: url.hostname,
          path: url.pathname + (url.search || ''),
          headers: { 'Content-Type': 'application/json', 'Content-Length': data.length },
        },
        (res) => {
          res.on('data', () => {});
          res.on('end', resolve);
        }
      );
      req.on('error', reject);
      req.write(data);
      req.end();
    } catch (e) {
      reject(e);
    }
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { sessionId, userEmail, message } = req.body || {};

  const slackWebhook = process.env.SLACK_WEBHOOK_URL;
  const telegramWebhook = process.env.TELEGRAM_WEBHOOK_URL;

  try {
    const payload = {
      text: `Zion Live Support Request\nSession: ${sessionId || 'unknown'}\nUser: ${userEmail || 'unknown'}\nMessage: ${message || ''}`,
    };
    const tasks: Promise<void>[] = [];
    if (slackWebhook) tasks.push(postJson(slackWebhook, payload));
    if (telegramWebhook) tasks.push(postJson(telegramWebhook, payload));
    if (tasks.length === 0) return res.status(200).json({ ok: true, info: 'No webhooks configured' });
    await Promise.all(tasks);
    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to escalate' });
  }
}