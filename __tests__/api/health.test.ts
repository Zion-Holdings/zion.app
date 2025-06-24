import { createMocks } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/health';

describe('/api/health API Endpoint', () => {
  it('returns status ok with uptime', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({ method: 'GET' });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = res._getJSONData();
    expect(data.status).toBe('ok');
    expect(typeof data.uptime).toBe('number');
    expect(typeof data.timestamp).toBe('string');
  });

  it('rejects non-GET methods', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({ method: 'POST' });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
  });
});
