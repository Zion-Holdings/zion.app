import type { NextApiRequest, NextApiResponse } from 'next';
import { devNetState } from '@/utils/devnet/state';
import { withRateLimit } from '@/utils/api/rateLimit';

function parseBody(req: NextApiRequest): any {
  try {
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return {};
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const id = String((req.query?.nationId as string) || '')
      .trim();
    const nation = devNetState.nations.find(n => n.id === id);
    if (!nation) {
      res.status(404).json({ error: 'nation not found' });
      return;
    }
    res.status(200).json({ nationId: id, manifesto: nation.manifesto || '' });
    return;
  }

  if (req.method === 'POST') {
    const body = parseBody(req);
    const id = String(body?.nationId || '').trim();
    const manifesto = String(body?.manifesto || '').trim();
    const nation = devNetState.nations.find(n => n.id === id);
    if (!nation) {
      res.status(404).json({ error: 'nation not found' });
      return;
    }
    nation.manifesto = manifesto;
    res.status(200).json({ nationId: id, manifesto });
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}

export default withRateLimit(handler, { windowMs: 60_000, max: 60 });