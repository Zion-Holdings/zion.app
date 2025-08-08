import type { NextApiRequest, NextApiResponse } from 'next';
import { devNetState, Nation } from '@/utils/devnet/state';
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
    res.status(200).json({ nations: devNetState.nations });
    return;
  }

  if (req.method === 'POST') {
    const body = parseBody(req);
    const name = String(body?.name || '').trim();
    const founder = String(body?.founder || '').trim();
    const manifesto = body?.manifesto ? String(body.manifesto) : undefined;

    if (!name || !founder) {
      res.status(400).json({ error: 'name and founder are required' });
      return;
    }

    const id = `nation_${Math.random().toString(36).slice(2, 10)}`;
    const nation: Nation = {
      id,
      name,
      founder,
      manifesto,
      createdAt: Date.now(),
    };
    devNetState.nations.unshift(nation);
    res.status(201).json({ nation });
    return;
  }

  if (req.method === 'PUT') {
    const body = parseBody(req);
    const id = String(body?.id || '').trim();
    const manifesto = String(body?.manifesto || '').trim();
    const nation = devNetState.nations.find(n => n.id === id);
    if (!nation) {
      res.status(404).json({ error: 'nation not found' });
      return;
    }
    nation.manifesto = manifesto;
    res.status(200).json({ nation });
    return;
  }

  res.setHeader('Allow', 'GET, POST, PUT');
  res.status(405).end('Method Not Allowed');
}

export default withRateLimit(handler, { windowMs: 60_000, max: 60 });