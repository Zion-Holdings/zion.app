import { createMocks } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/status';

describe('/api/status API Endpoint', () => {
  it('returns service status list', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({ method: 'GET' });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = res._getJSONData();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
    expect(typeof data[0].name).toBe('string');
    expect(typeof data[0].status).toBe('string');
  });

  it('rejects non-GET methods', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({ method: 'POST' });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
  });
});
