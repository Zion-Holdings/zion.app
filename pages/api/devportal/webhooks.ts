import { NextApiRequest, NextApiResponse } from 'next';
import { WebhookEventType } from '../../../utils/devportal/types';
import { getUserIdFromRequest } from '../../../utils/devportal/auth';
import { listListeners, createListener, deleteListener, testDispatch } from '../../../utils/devportal/webhooks';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = getUserIdFromRequest(req);

  if (req.method === 'GET') {
    const listeners = listListeners(userId);
    return res.status(200).json({ data: listeners });
  }

  if (req.method === 'POST') {
    const { url, events, secret, action, listenerId, testEvent } = req.body || {};
    if (action === 'test') {
      const ok = await testDispatch(userId, listenerId, (testEvent as WebhookEventType) || 'quote_received');
      return res.status(ok ? 200 : 400).json({ ok });
    }
    if (!url || !Array.isArray(events)) {
      return res.status(400).json({ error: { code: 'invalid_request', message: 'Missing url or events' } });
    }
    const created = createListener(userId, url, events as WebhookEventType[], secret);
    return res.status(201).json({ data: created });
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    const ok = deleteListener(userId, String(id));
    return res.status(ok ? 200 : 404).json({ ok });
  }

  return res.status(405).json({ error: { code: 'method_not_allowed', message: 'Method not allowed' } });
}